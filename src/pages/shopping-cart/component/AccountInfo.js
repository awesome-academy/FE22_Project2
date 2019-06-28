import React, { Component } from 'react';
import {connect} from "react-redux";
import {loadDataUsers} from "../../../redux/actions";

const urlUsers = process.env.REACT_APP_USERS;

class AccountInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            check: true
        };

        this.firstName = React.createRef();
        this.lastName = React.createRef();
        this.email = React.createRef();

        this.onUpdateHandler = this.onUpdateHandler.bind(this);
    }

    componentDidMount() {
        // Fetch Data Users from API
        const { data } = this.props;
        fetch(urlUsers)
            .then(res => res.json())
            .then(
                (result) => {
                    data(result);
                },
                (error) => {
                    console.log(error);
                }
            );
    }

    async editProfile(obj) {
        await fetch(urlUsers+"/"+obj.id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj)
        });
    }

    onUpdateHandler(event) {
        this.setState({
            check: !this.state.check
        });

        if(!this.state.check) {
            const { users } = this.props;
            const idUserAccount = JSON.parse(localStorage.getItem("logon"));
            const idUserFb = JSON.parse(localStorage.getItem("access"));

            const firstName = this.firstName.current.value;
            const lastName = this.lastName.current.value;
            const email = this.email.current.value;

            if(idUserAccount) {
                let temp = users.find(us => us.id === idUserAccount.id);
                let obj = {...temp, firstName, lastName, email};
                this.editProfile(obj);
            } else if (idUserFb) {
                let temp = users.find(us => us.id === idUserFb.id);
                let obj = {...temp, firstName, lastName, email};
                this.editProfile(obj);
            }
        }
    }

    render() {
        const { users } = this.props;
        const user = JSON.parse(localStorage.getItem("logon"));
        const access = JSON.parse(localStorage.getItem("access"));

        let firstName = "", lastName = "", email = "";

        if (user) {
            for (var u of users) {
                if (u.id === user.id) {
                    firstName = u.firstName;
                    lastName = u.lastName;
                    email = u.email;
                }
            }
        } else {
            if (access) {
                firstName = access.profile.first_name;
                lastName = access.profile.last_name;
                email = access.profile.email;
            }
        }

        const { check } = this.state;

        return(
            <div className="my--account ml-3 mt-4 mb-5">
                <h3 className="text-uppercase">Thông tin tài khoản</h3>
                <div className="form-horizontal">
                    <div className="form-group">
                        <label className="control-label" htmlFor="firstName">First Name:</label>
                        <input type="text" disabled={check} 
                        className="form-control" ref={this.firstName}
                        id="firstName" defaultValue={firstName}/>
                    </div>
                    <div className="form-group">
                        <label className="control-label" htmlFor="lastName">Last Name:</label>
                        <input type="text" disabled={check} 
                        className="form-control" ref={this.lastName}
                        id="lastName" defaultValue={lastName}/>
                    </div>
                    <div className="form-group">
                        <label className="control-label" htmlFor="email">Email:</label>
                        <input type="email" disabled={check} 
                        className="form-control" ref={this.email}
                        id="email" defaultValue={email}/>
                    </div>
                    {
                        check && 
                        <button className="btn btn-success" disabled={!check} 
                            onClick={this.onUpdateHandler}>Chỉnh sửa</button>
                    }
                    {
                        !check &&
                        <button className="btn btn-success" disabled={check} 
                            onClick={this.onUpdateHandler}>Cập nhật</button>
                    }
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

function mapDispatchToProps(dispatch) {
    return {
        data: (list) => {
            dispatch(loadDataUsers(list));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountInfo);
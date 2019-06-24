import React, { Component } from 'react';
import {connect} from "react-redux";
import {loadDataUsers} from "../../../redux/actions";

const urlUsers = process.env.REACT_APP_USERS;

class AccountInfo extends Component {
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

        return(
            <div className="my--account ml-3 mt-4 mb-5">
                <h3 className="text-uppercase">Thông tin tài khoản</h3>
                <form className="form-horizontal" action="">
                    <div className="form-group">
                        <label className="control-label" htmlFor="firstName">First Name:</label>
                        <input type="email" className="form-control" id="firstName" value={firstName}/>
                    </div>
                    <div className="form-group">
                        <label className="control-label" htmlFor="lastName">Last Name:</label>
                        <input type="text" className="form-control" id="lastName" value={lastName}/>
                    </div>
                    <div className="form-group">
                        <label className="control-label" htmlFor="email">Email:</label>
                        <input type="email" className="form-control" id="email" value={email}/>
                    </div>
                </form>
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
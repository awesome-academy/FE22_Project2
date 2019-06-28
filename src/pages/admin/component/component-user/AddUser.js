import React, { Component } from 'react';
import connect from "react-redux/es/connect/connect";
import {loadDataUsers} from "../../../../redux/actions";

const urlUsers = process.env.REACT_APP_USERS;

class AddUser extends Component {
    constructor(props) {
        super(props);

        this.firstName = React.createRef();
        this.lastName = React.createRef();
        this.email = React.createRef();
        this.password = React.createRef();

        this.onAddHandler = this.onAddHandler.bind(this);
        this.getRole = this.getRole.bind(this);

        this.state = {
            role: 2
        }
    }

    componentDidMount() {
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

    async addUser(user) {
        await await fetch(urlUsers, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        });
    }

    onAddHandler(event) {
        const firstName = this.firstName.current.value;
        const lastName = this.lastName.current.value;
        const email = this.email.current.value;
        const password = this.password.current.value;
        const { role } = this.state;
        const { users } = this.props;

        let id = users[users.length-1].id+1;

        if (firstName && lastName && email && password && role) {
            let user = {id, firstName, lastName, email, password, role, isActive: true};
            this.addUser(user);

            this.firstName.current.value = "";
            this.lastName.current.value = "";
            this.email.current.value = "";
            this.password.current.value = "";
        }
    }

    getRole(event) {
        this.setState({
            role: parseInt(event.target.value)
        });
    }

    render() {
        return (
            <div className="mt-3">
                <div className="form-group">
                    <label htmlFor="fname">First Name:</label>
                    <input type="text" ref={this.firstName} className="form-control"
                           id="fname" placeholder="Enter First Name" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="lname">Last Name:</label>
                    <input type="text" ref={this.lastName} className="form-control"
                           id="lname" placeholder="Enter Last Name" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" ref={this.email} className="form-control"
                           id="email" placeholder="Enter email" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" ref={this.password} className="form-control"
                           id="password" placeholder="Enter password" required/>
                </div>
                <div className="form-group">
                    <label>Role</label>
                    <div className="checkbox">
                        <label htmlFor="admin" className="mr-3">
                            <input type="radio" value="1"
                                   id="admin" onChange={this.getRole} name="role"/> Admin
                        </label>
                        <label htmlFor="user">
                            <input type="radio" value="2"
                                   id="user" onChange={this.getRole} name="role" defaultChecked/> User
                        </label>
                    </div>
                </div>
                <div className="form-group">
                    <button onClick={this.onAddHandler} className="btn btn-primary">Thêm</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
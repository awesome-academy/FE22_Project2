import React, { Component } from 'react';
import connect from "react-redux/es/connect/connect";
import { redirect } from "../../../../redux/actions";

const urlUsers = process.env.REACT_APP_USERS;

class EditUser extends Component {
    constructor(props) {
        super(props);

        this.firstName = React.createRef();
        this.lastName = React.createRef();
        this.email = React.createRef();

        this.state = {
            role: 2
        };

        this.onEditHandling = this.onEditHandling.bind(this);
        this.getRole = this.getRole.bind(this);
    }

    checkRole(role){
        let roleUser = role;
        let check = true;
        if (roleUser === 1) check = true;
        else check = false;
        return check;
    }

    getRole(event) {
        this.setState({
            role: parseInt(event.target.value)
        });
    }

    async edtDataUsers(obj) {
        // POST Data Carts
        await fetch(urlUsers+"/"+obj.id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj)
        });
    }

    onEditHandling(user) {
        return (event) => {
            const firstName = this.firstName.current.value;
            const lastName = this.lastName.current.value;
            const email = this.email.current.value;
            const { role } = this.state;
            const { redirect } = this.props;

            if (firstName && lastName && email && role) {
                if (user.isActive) {
                    let obj = {id: user.id, firstName, lastName, email, role, password: user.password, isActive: user.isActive};
                    setTimeout(() => {
                        this.edtDataUsers(obj);
                    }, 400);
                    redirect(1); // redirect to Table Users
                }
            }
        }
    }

    render() {
        const { usersUpdate } = this.props;

        let check = this.checkRole(usersUpdate.role);

        return (
            <div className="mt-3">
                <div className="form-group">
                    <label htmlFor="fname">First Name:</label>
                    <input type="text" className="form-control"
                           id="fname" defaultValue={usersUpdate.firstName}
                           ref={this.firstName}
                           placeholder="Enter First Name" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="lname">Last Name:</label>
                    <input type="text" className="form-control"
                           id="lname" defaultValue={usersUpdate.lastName}
                           ref={this.lastName}
                           placeholder="Enter Last Name" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="form-control"
                           id="email" defaultValue={usersUpdate.email}
                           ref={this.email}
                           placeholder="Enter email" required/>
                </div>
                <div className="form-group">
                    <label>Role</label>
                    <div className="checkbox">
                        <label htmlFor="admin" className="mr-3">
                            <input type="radio" id="admin" value="1"
                                   name="role" onChange={this.getRole}
                                   defaultChecked={check}/> Admin
                        </label>
                        <label htmlFor="user">
                            <input type="radio" id="user" value="2"
                                   name="role" onChange={this.getRole}
                                   defaultChecked={!check}/> User
                        </label>
                    </div>
                </div>
                <div className="form-group">
                    <button onClick={this.onEditHandling(usersUpdate)}
                            className="btn btn-primary">Sửa</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        usersUpdate: state.usersUpdate
    }
}

function mapDispatchToProps(dispatch) {
    return {
        redirect: (item) => {
            dispatch(redirect(item));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);
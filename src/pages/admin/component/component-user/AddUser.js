import React, { Component } from 'react';

class AddUser extends Component {
    render() {
        return (
            <form className="mt-3" action="#">
                <div className="form-group">
                    <label htmlFor="fname">First Name:</label>
                    <input type="text" className="form-control" id="fname" placeholder="Enter First Name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="lname">Last Name:</label>
                    <input type="text" className="form-control" id="lname" placeholder="Enter Last Name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="pwd">Password:</label>
                    <input type="password" className="form-control" id="pwd" placeholder="Enter password"/>
                </div>
                <div className="form-group">
                    <label>Role</label>
                    <div className="checkbox">
                        <label htmlFor="admin" className="mr-3">
                            <input type="radio" id="admin" name="role"/> Admin
                        </label>
                        <label htmlFor="user">
                            <input type="radio" id="user" name="role"/> User
                        </label>
                    </div>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Add</button>
                </div>
            </form>
        );
    }
}

export default AddUser;
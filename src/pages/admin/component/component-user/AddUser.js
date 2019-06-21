import React, { Component } from 'react';

class AddUser extends Component {
    render() {
        return (
            <form className="form-horizontal" action="#">
                <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="fname">First Name:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="fname" placeholder="Enter First Name"/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="lname">Last Name:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="lname" placeholder="Enter Last Name"/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="email">Email:</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="email" placeholder="Enter email"/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="pwd">Password:</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="pwd" placeholder="Enter password"/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <label>Role</label>
                        <div className="checkbox">
                            <label htmlFor="admin" className="mr-3">
                                <input type="radio" id="admin" name="role"/>Admin
                            </label>
                            <label htmlFor="user">
                                <input type="radio" id="user" name="role"/>User
                            </label>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <button type="submit" className="btn btn-primary">Add</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default AddUser;
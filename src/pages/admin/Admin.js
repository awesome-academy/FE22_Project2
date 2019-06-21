import React, { Component } from 'react';
import Login from "./component/Login";

class Admin extends Component {
    render() {
        return (
            <div className="admin--page">
                <Login/>
            </div>
        );
    }
}

export default Admin;
import React, { Component } from 'react';
import LayoutAdmin from "./LayoutAdmin";
import AddUser from "./component-user/AddUser";

class UserAdd extends Component {
    render() {
        return (
            <LayoutAdmin>
                <AddUser/>
            </LayoutAdmin>
        );
    }
}

export default UserAdd;
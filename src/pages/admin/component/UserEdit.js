import React, { Component } from 'react';
import LayoutAdmin from "./LayoutAdmin";
import EditUser from "./component-user/EditUser";

class UserEdit extends Component {
    render() {
        return (
            <LayoutAdmin>
                <EditUser/>
            </LayoutAdmin>
        );
    }
}

export default UserEdit;
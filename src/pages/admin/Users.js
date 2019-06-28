import React, { Component } from 'react';
import TableUsers from "./component/component-user/TableUsers";
import AddUser from "./component/component-user/AddUser";
import LayoutAdmin from "./component/LayoutAdmin";

class Users extends Component {
    render() {
        return (
            <LayoutAdmin>
                <AddUser/>
                <TableUsers/>
            </LayoutAdmin>
        );
    }
}

export default Users;
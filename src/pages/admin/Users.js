import React, { Component } from 'react';
import { Link } from "react-router-dom";

import TableUsers from "./component/component-user/TableUsers";
import LayoutAdmin from "./component/LayoutAdmin";

class Users extends Component {
    render() {
        return (
            <LayoutAdmin>
                <Link to="/admin-users/add"><button className="btn btn-primary text-uppercase">Thêm</button></Link>
                <TableUsers/>
            </LayoutAdmin>
        );
    }
}

export default Users;
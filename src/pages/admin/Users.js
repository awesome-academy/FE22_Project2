import React, { Component } from 'react';
import NavAdmin from "./component/NavAdmin";
import SideBar from "./component/SideBar";
import FooterAdmin from "./component/FooterAdmin";
import TableUsers from "./component/component-user/TableUsers";
import AddUser from "./component/component-user/AddUser";

class Users extends Component {
    render() {
        return (
            <div className="admin--page">
                <NavAdmin/>

                <div className="wrap--admin">
                    <SideBar/>

                    <div className="wrap--content">
                        <div className="container-fluid mt-4">
                            <AddUser/>
                            <TableUsers/>
                        </div>

                        <FooterAdmin/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Users;
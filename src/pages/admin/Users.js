import React, { Component } from 'react';

import TableUsers from "./component/component-user/TableUsers";
import LayoutAdmin from "./component/LayoutAdmin";
import connect from "react-redux/es/connect/connect";
import AddUser from "./component/component-user/AddUser";
import EditUser from "./component/component-user/EditUser";

class Users extends Component {
    render() {
        const { redirectFeature } = this.props;
        const checkLoginAdmin = JSON.parse(localStorage.getItem("admin"));
        let check = false;
        if (!checkLoginAdmin) check = false;
        else check = true;

        if(check) {
            return (
                <LayoutAdmin>
                    {
                        redirectFeature === 1 && <TableUsers/>
                    }
                    {
                        redirectFeature === 2 && <AddUser/>
                    }
                    {
                        redirectFeature === 3 && <EditUser/>
                    }
                </LayoutAdmin>
            );
        } else {
            window.location.href = "/admin";
        }
    }
}

function mapStateToProps(state) {
    return {
        redirectFeature: state.redirectFeature
    }
}

export default connect(mapStateToProps)(Users);
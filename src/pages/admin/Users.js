import React, { Component } from 'react';

import TableUsers from "./component/component-user/TableUsers";
import LayoutAdmin from "./component/LayoutAdmin";
import connect from "react-redux/es/connect/connect";
import AddUser from "./component/component-user/AddUser";
import EditUser from "./component/component-user/EditUser";

class Users extends Component {
    render() {
        const { redirectFeature } = this.props;
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
    }
}

function mapStateToProps(state) {
    return {
        redirectFeature: state.redirectFeature
    }
}

export default connect(mapStateToProps)(Users);
import React, { Component } from 'react';

import IconCard from "./component/sub-component/IconCard";
import LineChart from "./component/sub-component/LineChart";
import DataTable from "./component/sub-component/DataTable";
import LayoutAdmin from "./component/LayoutAdmin";

class Dashboard extends Component {
    render() {
        const checkLoginAdmin = JSON.parse(localStorage.getItem("admin"));
        let check = false;
        if (!checkLoginAdmin) check = false;
        else check = true;
        
        if (check) {
            return (
                <LayoutAdmin>
                    <IconCard/>
                    <LineChart/>
                    <DataTable/>
                </LayoutAdmin>
            );
        } else {
            window.location.href = "/admin";
        }
    }
}

export default Dashboard;
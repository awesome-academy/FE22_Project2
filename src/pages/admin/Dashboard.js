import React, { Component } from 'react';

import NavAdmin from "./component/NavAdmin";
import SideBar from "./component/SideBar";
import FooterAdmin from "./component/FooterAdmin";
import IconCard from "./component/sub-component/IconCard";
import LineChart from "./component/sub-component/LineChart";
import DataTable from "./component/sub-component/DataTable";

class Dashboard extends Component {
    render() {
        return (
            <div className="admin--page">
                <NavAdmin/>

                <div className="wrap--admin">
                    <SideBar/>

                    <div className="wrap--content">
                        <div className="container-fluid mt-4">
                            <IconCard/>
                            <LineChart/>
                            <DataTable/>
                        </div>

                        <FooterAdmin/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
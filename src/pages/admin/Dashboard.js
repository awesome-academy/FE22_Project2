import React, { Component } from 'react';

import IconCard from "./component/sub-component/IconCard";
import LineChart from "./component/sub-component/LineChart";
import DataTable from "./component/sub-component/DataTable";
import LayoutAdmin from "./component/LayoutAdmin";

class Dashboard extends Component {
    render() {
        return (
            <LayoutAdmin>
                <IconCard/>
                <LineChart/>
                <DataTable/>
            </LayoutAdmin>
        );
    }
}

export default Dashboard;
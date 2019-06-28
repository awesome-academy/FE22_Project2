import React, { Component } from 'react';
import ShowDashboard from "./ShowDashboard";
import ShowTabUsers from "./ShowTabUsers";

class ItemShow extends Component {
    render() {
        const { accept } = this.props; // If true Show Table don't have button Edit, false show table have button
        return (
            <div className="card mb-3 mt-4">
                <div className="card-header">
                    <i className="fas fa-table"/> Bảng Tài Khoản
                </div>
                <div className="card-body">
                    {
                        accept && <ShowDashboard/>
                    }
                    {
                        !accept && <ShowTabUsers/>
                    }
                </div>
                <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
            </div>
        );
    }
}

export default ItemShow;
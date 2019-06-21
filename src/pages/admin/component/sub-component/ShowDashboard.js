import React, { Component } from 'react';
import ItemTableUser from "../component-user/ItemTableUser";

class ShowDashboard extends Component {
    render() {
        return (
            <div className="cart--table mb-5">
                <table className="table table-bordered table-responsive-sm">
                    <thead>
                    <tr>
                        <th className="text-uppercase text-center">Firstname</th>
                        <th className="text-uppercase text-center">Lastname</th>
                        <th className="text-uppercase text-center">Email</th>
                        <th className="text-uppercase text-center">Role</th>
                    </tr>
                    </thead>
                    <ItemTableUser show={false}/>
                </table>
            </div>
        );
    }
}

export default ShowDashboard;
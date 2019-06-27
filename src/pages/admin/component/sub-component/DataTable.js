import React, { Component } from 'react';
import ItemRowTable from "./ItemRowTable";

class DataTable extends Component {
    render() {
        return (
            <div className="card mb-3 mt-4">
                <div className="card-header">
                    <i className="fas fa-table"/> Data Table
                </div>
                <div className="card-body">
                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Email</th>
                        </tr>
                        </thead>
                        <tbody>
                            <ItemRowTable>
                                <td>John</td>
                                <td>Doe</td>
                                <td>john@example.com</td>
                            </ItemRowTable>
                        </tbody>
                    </table>
                </div>
                <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
            </div>
        );
    }
}

export default DataTable;
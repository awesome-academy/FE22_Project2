import React, { Component } from 'react';

class RowItemCategory extends Component {
    render() {
        return (
            <tr>
                <td className="text-center">
                    <div className="table--item"><span>John</span></div>
                </td>
                <td className="text-center">
                    <div className="table--item">
                        <input type="checkbox"/>
                    </div>
                </td>
                <td className="text-center">
                    <div className="table--item">
                        <button className="mr-2 btn btn-warning">Sửa</button>
                    </div>
                </td>
            </tr>
        );
    }
}

export default (RowItemCategory);
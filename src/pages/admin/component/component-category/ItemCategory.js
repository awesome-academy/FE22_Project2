import React, { Component } from 'react';
import ItemRowTable from "../sub-component/ItemRowTable";

class ItemCategory extends Component {
    render() {
        return (
            <ItemRowTable>
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
            </ItemRowTable>
        );
    }
}

export default ItemCategory;
import React, { Component } from 'react';
import ItemRowTable from "../sub-component/ItemRowTable";
import RowItemOrder from "./RowItemOrder";

class ItemOrder extends Component {
    render() {
        return (
            <ItemRowTable>
                <RowItemOrder/>
            </ItemRowTable>
        );
    }
}

export default ItemOrder;
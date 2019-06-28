import React, { Component } from 'react';
import ItemRowTable from "../sub-component/ItemRowTable";
import RowItemProduct from "./RowItemProduct";

class ItemProduct extends Component {
    render() {
        return (
            <ItemRowTable>
                <RowItemProduct/>
            </ItemRowTable>
        );
    }
}

export default ItemProduct;
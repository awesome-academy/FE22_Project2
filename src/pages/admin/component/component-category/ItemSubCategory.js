import React, { Component } from 'react';
import ItemRowTable from "../sub-component/ItemRowTable";
import RowItemSubCategory from "./RowItemSubCategory";

class ItemSubCategory extends Component {
    render() {
        return (
            <ItemRowTable>
                <RowItemSubCategory/>
            </ItemRowTable>
        );
    }
}

export default ItemSubCategory;
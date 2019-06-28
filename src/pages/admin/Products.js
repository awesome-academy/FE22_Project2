import React, { Component } from 'react';
import AddProduct from "./component/component-products/AddProduct";
import TableProducts from "./component/component-products/TableProducts";
import LayoutAdmin from "./component/LayoutAdmin";

class Products extends Component {
    render() {
        return (
            <LayoutAdmin>
                <AddProduct/>
                <TableProducts/>
            </LayoutAdmin>
        );
    }
}

export default Products;
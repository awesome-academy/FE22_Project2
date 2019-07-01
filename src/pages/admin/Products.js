import React, { Component } from 'react';

import AddProduct from "./component/component-products/AddProduct";
import TableProducts from "./component/component-products/TableProducts";
import LayoutAdmin from "./component/LayoutAdmin";
import connect from "react-redux/es/connect/connect";
import EditProduct from "./component/component-products/EditProduct";

class Products extends Component {
    render() {
        const { redirectProducts } = this.props;
        return (
            <LayoutAdmin>
                {
                    redirectProducts === 1 && <TableProducts/>
                }
                {
                    redirectProducts === 2 && <AddProduct/>
                }
                {
                    redirectProducts === 3 && <EditProduct/>
                }
            </LayoutAdmin>
        );     
    }
}

function mapStateToProps(state) {
    return {
        redirectProducts: state.redirectProducts
    }
}

export default connect(mapStateToProps)(Products);
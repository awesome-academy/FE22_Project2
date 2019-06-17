import React, { Component } from 'react';
import Nav from "../../component/common/nav/Nav";
import Breadcrumb from "../../component/common/tiltleAddress/titleAddress";
import Cart from "./component/Cart";

class ShoppingCart extends Component {
    render() {
        return(
            <div className="shopping--cart">
                <Nav />
                <div className="container">
                    <Breadcrumb />
                    <Cart/>
                </div>
            </div>
        );
    }
}

export default ShoppingCart;
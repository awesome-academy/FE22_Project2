import React, { Component } from 'react';
import ShoppingCart from "../../pages/shopping-cart/ShoppingCart";

class Layout extends Component {
    render() {
        return (
            <div className="layout--app">
                <ShoppingCart/>
            </div>
        );
    }
}

export default Layout;
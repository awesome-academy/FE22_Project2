import React, { Component } from 'react';
import Home from "../../pages/home/Home";
import Product from "../../pages/product/Product";

class Layout extends Component {
    render() {
        return (
            <div className="layout--app">
                <Home/>
            </div>
        );
    }
}

export default Layout;
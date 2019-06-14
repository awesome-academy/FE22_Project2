import React, { Component } from 'react';
import Footer from "../common/footer/Footer";
import Product from "../../pages/product/Product";

class Layout extends Component {
    render() {
        return (
            <div className="layout--app">
                <Product/>
                <Footer/>
            </div>
        );
    }
}

export default Layout;
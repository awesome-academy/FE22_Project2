import React, { Component } from 'react';
import Product from "../../pages/product/Product";
import SignIn from "../../pages/sign-in/SignIn";
import SignUp from "../../pages/sign-up/SignUp";

class Layout extends Component {
    render() {
        return (
            <div className="layout--app">
                <SignUp/>
            </div>
        );
    }
}

export default Layout;
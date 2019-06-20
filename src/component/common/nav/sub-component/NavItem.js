import React, { Component } from 'react';
import { Link } from "react-router-dom";

import ImgLogo from "../../../../images/HOME/logo.png";
import CartLg from "./CartLg";
import CartSm from "./CartSm";
import MenuBar from "./MenuBar";

class NavItem extends Component {
    render() {
        return (
            <div className="container">
                <Link className="navbar-brand" to="/"><img src={ImgLogo} alt=""/></Link>
                <CartSm/>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar"><i className="fa fa-bars" /></button>

                <MenuBar/>

                <CartLg/>
            </div>
        );
    }
}

export default NavItem;

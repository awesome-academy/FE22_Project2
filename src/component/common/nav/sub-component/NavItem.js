import React, { Component } from 'react';
import ImgLogo from "../../../../images/HOME/logo.png";
import CartLg from "./CartLg";
import CartSm from "./CartSm";
import MenuBar from "./MenuBar";

export default class NavItem extends Component {
    render() {
        return (
            <div className="container">
                <a className="navbar-brand" href="#"><img src={ImgLogo} alt=""/></a>
                <CartSm/>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar"><i className="fa fa-bars" /></button>

                <MenuBar/>

                <CartLg/>
            </div>
        );
    }
}
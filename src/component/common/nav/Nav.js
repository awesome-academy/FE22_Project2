import React, { Component } from 'react';
import NavItem from "./sub-component/NavItem";

class Nav extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md nav--not--index">
                    <NavItem/>
                </nav>
            </div>
        );
    }
}

export default Nav;
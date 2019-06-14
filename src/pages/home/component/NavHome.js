import React, { Component } from 'react';
import NavItem from "../../../component/common/nav/sub-component/NavItem";


class NavHome extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md fixed-top">
                <NavItem/>
            </nav>
        );
    }
}

export default NavHome;
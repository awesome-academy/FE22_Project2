import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SideBar extends Component{
    render() {
        return (
            <ul className="sidebar navbar-nav bg-dark">
                <li className="nav-item">
                    <Link className="nav-link" to="/dashboard">
                        <i className="fas fa-fw fa-tachometer-alt" />
                        <span> Dashboard</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/admin-users">
                        <i className="fas fa-users"/>
                        <span> Users</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/admin-categories">
                        <i className="fas fa-th-list"/>
                        <span> Categories</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/admin-products">
                        <i className="fab fa-elementor"/>
                        <span> Products</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/admin-list">
                        <i className="fas fa-address-book"/>
                        <span> List Order</span>
                    </Link>
                </li>
            </ul>
        );
    }
}

export default SideBar;
import React, { Component } from 'react';
import connect from "react-redux/es/connect/connect";
import { Link } from 'react-router-dom';

import {
    redirect,
    redirectCategory,
    redirectProducts,
    redirectSubCategory,
} from "../../../redux/actions";

class SideBar extends Component{
    constructor(props) {
        super(props);

        this.onClickAdd = this.onClickAdd.bind(this);
        this.addCategory = this.addCategory.bind(this);
        this.onClickProducts = this.onClickProducts.bind(this);
    }

    onClickAdd(event) {
        const { redirect } = this.props;
        redirect(1); // Redirect to TableUsers
    }

    addCategory(event) {
        const { redirectCategory, redirectSubCategory } = this.props;
        redirectCategory(1); // Redirect to TableCategory
        redirectSubCategory(1); // Redirect to TableSubCategory
    }

    onClickProducts(event) {
        const { redirectProducts } = this.props;
        redirectProducts(1) //Redirect to TableProducts
    }

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
                    <Link className="nav-link" to="/admin-users" onClick={this.onClickAdd}>
                        <i className="fas fa-users"/>
                        <span> Users</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/admin-categories" onClick={this.addCategory}>
                        <i className="fas fa-th-list"/>
                        <span> Categories</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/admin-products" onClick={this.onClickProducts}>
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

function mapStateToProps(state) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
        redirect: (item) => {
          dispatch(redirect(item));
        },
        redirectProducts: (item) => {
            dispatch(redirectProducts(item))
        },
        redirectCategory: (item) => {
            dispatch(redirectCategory(item))
        },
        redirectSubCategory: (item) => {
            dispatch(redirectSubCategory(item))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
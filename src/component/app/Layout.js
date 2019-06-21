import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { loadData, loadDataCate } from "../../redux/actions";
import connect from "react-redux/es/connect/connect";
import SignUp from "../../pages/sign-up/SignUp";
import Home from "../../pages/home/Home";
import Product from "../../pages/product/Product";
import SignIn from "../../pages/sign-in/SignIn";
import ShoppingCart from "../../pages/shopping-cart/ShoppingCart";
import Detail from "../../pages/detail/Detail";
import Footer from "../common/footer/Footer";
import Admin from "../../pages/admin/Admin";

const urlProducts = process.env.REACT_APP_PRODUCTS;
const urlCategories = process.env.REACT_APP_CATEGORIES;

function home() {
    return <Home/>;
}

function product() {
    return <Product/>;
}

function signIn() {
    return <SignIn/>;
}

function signUp() {
    return <SignUp/>;
}

function shoppingCart() {
    return <ShoppingCart/>;
}

function detail() {
    return <Detail/>;
}

function admin() {
    return <Admin/>;
}

class Layout extends Component {
    componentDidMount() {
        // Fetch Data Products from API
        const { data } = this.props;
        fetch(urlProducts)
            .then(res => res.json())
            .then(
                (result) => {
                    data(result);
                },
                (error) => {
                    console.log(error);
                }
            );

        // Fetch Data Categories from API
        const { dataCate } = this.props;
        fetch(urlCategories)
            .then(res => res.json())
            .then(
                (result) => {
                    dataCate(result);
                },
                (error) => {
                    console.log(error);
                }
            )
    }

    render() {
        return (
            <Router>
                <div className="layout--app">
                    <Route path="/" exact component={home} />
                    <Route path="/products" component={product} />
                    <Route path="/sign-in" exact component={signIn} />
                    <Route path="/sign-up" component={signUp} />
                    <Route path="/shopping-cart" component={shoppingCart} />
                    <Route path="/detail" component={detail} />
                    <Route path="/admin" component={admin} />

                    <Footer/>
                </div>
            </Router>
        );
    }
}

function mapStateToProps(state) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
        data: (list) => {
            dispatch(loadData(list));
        },
        dataCate: (list) => {
            dispatch(loadDataCate(list));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
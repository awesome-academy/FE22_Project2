import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { loadData, loadDataCate } from "../../redux/actions";
import connect from "react-redux/es/connect/connect";
import SignUp from "../../pages/sign-up/SignUp";
import Home from "../../pages/home/Home";
import Product from "../../pages/product/Product";
import SignIn from "../../pages/sign-in/SignIn";
import ShoppingCart from "../../pages/shopping-cart/ShoppingCart";
import Detail from "../../pages/detail/Detail";
import Dashboard from "../../pages/admin/Dashboard";
import Login from "../../pages/admin/Login";
import NotFound from "../common/NotFound";
import Users from "../../pages/admin/Users";
import Categories from "../../pages/admin/Categories";
import Products from "../../pages/admin/Products";
import ListOrder from "../../pages/admin/ListOrder";
import Introduce from '../../pages/introduce/Introduce';
import Contact from '../../pages/contact/Contact';
import Blog from '../../pages/blog/Blog';

import Loading from 'react-loading-bar';
import 'react-loading-bar/dist/index.css';

class Layout extends Component {
    componentDidMount() {
        // Fetch Data Products from API
        const { data } = this.props;
        data(); // Fetch Data with Thunk

        // Fetch Data Categories from API
        const { dataCate } = this.props;
        dataCate();
    }

    render() {
        const { isFetching } = this.props.products;
        return (
            <Router>
                <div className="layout--app">
                    <Loading
                        show={isFetching}
                        color="#2d8cf0"
                    />
                    <Switch>
                        <Route path="/" exact component={() => <Home/>} />
                        <Route path="/products" component={() => <Product/>} />
                        <Route path="/sign-in" component={() => <SignIn/>} />
                        <Route path="/sign-up" component={() => <SignUp/>} />
                        <Route path="/shopping-cart" component={() => <ShoppingCart/>} />
                        <Route path="/detail" component={() => <Detail/>} />
                        <Route path="/about" component={() => <Introduce/>} />
                        <Route path="/map" component={() => <Contact/>} />
                        <Route path="/news" component={() => <Blog/>} />

                        <Route path="/admin" exact component={() => <Login/>} />
                        <Route path="/dashboard" component={() => <Dashboard/>} />
                        <Route path="/admin-users" exact component={() => <Users/>} />
                        <Route path="/admin-categories" component={() => <Categories/>} />
                        <Route path="/admin-products" component={() => <Products/>} />
                        <Route path="/admin-list" component={() => <ListOrder/>} />

                        <Route component={() => <NotFound/>} />
                    </Switch>
                </div>

            </Router>
        );
    }
}

function mapStateToProps(state) {
    return {
        products: state.products
    }
}

function mapDispatchToProps(dispatch) {
    return {
        data: () => {
            dispatch(loadData());
        },
        dataCate: () => {
            dispatch(loadDataCate());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
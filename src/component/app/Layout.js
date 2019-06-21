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
import UserEdit from "../../pages/admin/component/UserEdit";
import UserAdd from "../../pages/admin/component/UserAdd";

const urlProducts = process.env.REACT_APP_PRODUCTS;
const urlCategories = process.env.REACT_APP_CATEGORIES;

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
                    <Switch>
                        <Route path="/" exact component={() => <Home/>} />
                        <Route path="/products" component={() => <Product/>} />
                        <Route path="/sign-in" component={() => <SignIn/>} />
                        <Route path="/sign-up" component={() => <SignUp/>} />
                        <Route path="/shopping-cart" component={() => <ShoppingCart/>} />
                        <Route path="/detail" component={() => <Detail/>} />

                        <Route path="/admin" exact component={() => <Login/>} />
                        <Route path="/dashboard" component={() => <Dashboard/>} />
                        <Route path="/admin-users" exact component={() => <Users/>} />
                        <Route path="/admin-users/edit" exact component={() => <UserEdit/>} />
                        <Route path="/admin-users/add" exact component={() => <UserAdd/>} />
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
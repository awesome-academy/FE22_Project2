import React, { Component } from 'react';
import Home from "../../pages/home/Home";
import { loadData, loadDataCate } from "../../redux/actions";
import connect from "react-redux/es/connect/connect";
import SignIn from "../../pages/sign-in/SignIn";
import SignUp from "../../pages/sign-up/SignUp";
import Product from "../../pages/product/Product";

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
            <div className="layout--app">
                <SignUp/>
            </div>
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
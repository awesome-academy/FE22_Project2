import React, { Component } from 'react';
import ProductItem from "./ProductItem";

import axios from 'axios';

class ProductList extends Component {
    constructor() {
        super();
    }

    showProducts() {
        const url = process.env.REACT_APP_PRODUCTS;
        axios.get(url)
            .then(function (res) {
                // handle success
                console.log(res.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }

    render() {
        this.showProducts();
        return(
            <div className="product_list--item">
                <ProductItem path="product_1.jpg"/>
                <ProductItem path="product_2.jpg"/>
                <ProductItem path="product_3.jpg"/>
            </div>
        );
    }
}

export default ProductList;
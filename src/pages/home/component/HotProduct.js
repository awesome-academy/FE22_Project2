import React, { Component } from 'react'
import ProductItem from "./subComponent/ProductItem";
import HotProductTitles from "./subComponent/HotProductTitles";

class HotProduct extends Component {
    render() {
        return (
            <div className="container-fluid product--bg">
                <div className="container">
                    <HotProductTitles/>
                </div>

                <div className="product--carousel owl-carousel owl-theme pb-3">
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                </div>
            </div>

        );
    }
}

export default HotProduct;
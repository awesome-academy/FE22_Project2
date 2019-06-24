import React, { Component } from 'react';
import Nav from '../../component/common/nav/Nav';
import Breadcrumb from '../../component/common/tiltleAddress/titleAddress';

import imgAdv from '../../images/Grid/adv.jpg';
import ProductCategories from "./component/ProductCategories";
import ProductCompare from "./component/ProductCompare";
import ProductTags from "./component/ProductTags";
import ProductAdv from "./component/ProductAdv";
import ProductPag from "./component/ProductPag";
import ProductList from "./component/ProductList";

class Product extends Component {
    render() {
        return (
            <div className="product_page">
                <Nav />
                <Breadcrumb />
                <img className="product--adv img-fluid" src={imgAdv} alt="Adv"/>
                <div className="container mt-5 mb-5">
                    <div className="body_product row">
                        <div className="body_product--sidebar col-lg-4">
                            <ProductCategories/>
                            <ProductCompare/>
                            <ProductTags/>
                            <ProductAdv/>
                        </div>
                        <div className="body_product--content col-lg-8 mt-4 mt-lg-0">
                            <ProductPag/>
                            <ProductList/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;
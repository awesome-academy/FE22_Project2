import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProductItem from "./subComponent/ProductItem";
import HotProductTitles from "./subComponent/HotProductTitles";
import { loadData } from "../../../redux/actions";
import OwlCarousel from 'react-owl-carousel2';

class HotProduct extends Component {
    componentDidMount() {
        const url = process.env.REACT_APP_PRODUCTS;
        const { data } = this.props;
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    data(result);
                },
                (error) => {

                }
            )
    }

    render() {
        const { products } = this.props;
        const options = {
            loop:true,
            margin:10,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                750:{
                    items:2,
                    nav:false
                },
                1000:{
                    items:6,
                    nav:true,
                    loop:false
                }
            }
        };
        return (
            <div className="container-fluid product--bg">
                <div className="container">
                    <HotProductTitles/>
                </div>

                <OwlCarousel options={options} className="product--carousel owl-carousel owl-theme pb-3">
                    {
                        products.map((item,idx) => <ProductItem key={idx}
                                                                path={item.image}
                                                                price={item.price}
                                                                discount={item.discount}/>)
                    }
                    {/*<ProductItem key={0}*/}
                                 {/*path="product_1.jpg"*/}
                                 {/*price="100"*/}
                                 {/*discount="0"/>*/}
                    {/*<ProductItem key={1}*/}
                                 {/*path="product_1.jpg"*/}
                                 {/*price="100"*/}
                                 {/*discount="0"/>*/}
                    {/*<ProductItem key={2}*/}
                                 {/*path="product_1.jpg"*/}
                                 {/*price="100"*/}
                                 {/*discount="0"/>*/}
                    {/*<ProductItem key={3}*/}
                                 {/*path="product_1.jpg"*/}
                                 {/*price="100"*/}
                                 {/*discount="0"/>*/}
                    {/*<ProductItem key={4}*/}
                                 {/*path="product_2.jpg"*/}
                                 {/*price="100"*/}
                                 {/*discount="0"/>*/}
                    {/*<ProductItem key={5}*/}
                                 {/*path="product_2.jpg"*/}
                                 {/*price="100"*/}
                                 {/*discount="0"/>*/}
                </OwlCarousel>

            </div>

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
        data: (list) => {
            dispatch(loadData(list));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HotProduct);

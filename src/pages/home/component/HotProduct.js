import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProductItem from "./subComponent/ProductItem";
import HotProductTitles from "./subComponent/HotProductTitles";
import {clickAddItem, loadData} from "../../../redux/actions";
import OwlCarousel from 'react-owl-carousel2';

class HotProduct extends Component {
    constructor(props) {
        super(props);
        this.onClickAdd = this.onClickAdd.bind(this);
    }

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

    onClickAdd(item) {
        return (event) => {
            let countObject = JSON.parse(localStorage.getItem('id-item--cart'));

            if (!countObject) { // First Array Check Count Init
                countObject = [];
                countObject.push({id: item.id, count: 1})
            }
            else { // Array Check Count exist
                let idx = countObject.findIndex(obj => obj.id === item.id); // Get index of element in Array Check Count
                if (idx > -1) // Found element in Array Check Count
                    countObject[idx].count += 1;
                else // Don't Found element in Array Check Count
                    countObject.push({id: item.id, count: 1})
            }
            localStorage.setItem('id-item--cart', JSON.stringify(countObject)); // Set LocalStorage for Array Check Count
        }
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
                                                                discount={item.discount}
                                                                onClick={this.onClickAdd(item)}/>)
                    }
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

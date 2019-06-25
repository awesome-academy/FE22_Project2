import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProductItem from "./subComponent/ProductItem";
import HotProductTitles from "./subComponent/HotProductTitles";
import { addItemSelected } from '../../../redux/actions';
import OwlCarousel from 'react-owl-carousel2';

class HotProduct extends Component {
    constructor(props) {
        super(props);
        this.onClickAdd = this.onClickAdd.bind(this);
        this.onShowDetail = this.onShowDetail.bind(this);
    }

    onClickAdd(item) {
        return (event) => {
            const { productSelected, add } = this.props;
            let countObject = productSelected;

            if (!countObject) { // First Array Check Count Init
                countObject = [];
                countObject.push({...item, count: 1})
            }
            else { // Array Check Count exist
                let idx = countObject.findIndex(obj => obj.id === item.id); // Get index of element in Array Check Count
                if (idx > -1) // Found element in Array Check Count
                    countObject[idx].count += 1;
                else // Don't Found element in Array Check Count
                    countObject.push({...item, count: 1})
            }
            localStorage.setItem('id-item--cart', JSON.stringify(countObject)); // Set LocalStorage for Array Check Count
            add(countObject);
        }
    }

    onShowDetail(item) {
        return event => {
            let arrItemRecently = JSON.parse(localStorage.getItem('item-detail'));
            if (!arrItemRecently) arrItemRecently = [];

            arrItemRecently.push(item);

            localStorage.setItem('item-detail', JSON.stringify(arrItemRecently));
            window.location.href = '/detail';
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
                                                                name={item.productName}
                                                                decription={item.decription}
                                                                path={item.image}
                                                                price={item.price}
                                                                discount={item.discount}
                                                                onClick={this.onClickAdd(item)}
                                                                onShowDetail={this.onShowDetail(item)}/>)
                    }
                </OwlCarousel>

            </div>

        );
    }
}

function mapStateToProps(state) {
    return {
        products: state.products,
        productSelected: state.productSelected
    }
}

function mapDispatchToProps(dispatch) {
    return {
        add: (item) => {
            dispatch(addItemSelected(item));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HotProduct);

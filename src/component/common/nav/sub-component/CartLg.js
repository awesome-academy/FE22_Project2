import React, { Component } from 'react';
import { connect } from 'react-redux';

import ImgSearch from '../../../../images/HOME/btn-search.png';
import ImgShoppingCart from "../../../../images/HOME/shoppoing-cart.png";
import CartItem from "./CartItem";
import {addItemSelected, loadData} from "../../../../redux/actions";

class CartLg extends Component {
    constructor(props) {
        super(props);
        this.onRemove = this.onRemove.bind(this);
    }

    onRemove(item) {
        return (event) => {
            const { productSelected, add } = this.props;
            let arrItemRemove = productSelected;

            let idx = arrItemRemove.findIndex(obj => obj.id === item.id);
            arrItemRemove.splice(idx, 1);

            localStorage.setItem("id-item--cart", JSON.stringify(arrItemRemove));
            add(arrItemRemove);
        }
    }

    render() {
        const { productSelected } = this.props;
        let sum = 0;
        let total = 0;
        let arr = productSelected;
        if (!arr) arr = [];
        for (var it of arr) {
            sum += it.count;
            total += (it.count*it.price);
        }
        return (
            <div className="img--tool" id="manager--tool--2" >
                <div className="cart dropdown pr-3 pr-md-1">
                    <a className="mr-lg-3 show-amount-item" href="#">
                        <img src={ImgShoppingCart} alt="" /><span className="badge badge-pill badge-success">{sum}</span>
                    </a>
                    <div className="dropdown-menu w-100">
                        <div className="cart_item">
                            <div className="cart_item--sub">
                                {
                                    arr.map((item, idx) => <CartItem key={idx}
                                                                      count={item.count}
                                                                      path={item.image}
                                                                      price={item.price}
                                                                      productName={item.productName}
                                                                      onClick={this.onRemove(item)}/>)
                                }
                            </div>
                            <hr />
                            {/* Total price in cart*/}
                            <div className="total--price">
                                <span>Tổng số</span><span className="float-right">{total}.000<sup>đ</sup></span>
                            </div>
                            <button className="text-uppercase btn btn-dark mb-3 mt-2">Giỏ hàng</button>
                        </div>
                    </div>
                </div>
                <a href="#"><img src={ImgSearch} alt="" /></a>
                <div className="cart dropdown pl-4">
                    <a className="mr-lg-3 account" href="#">
                        <i className="fas fa-user"></i>
                    </a>
                    <div className="dropdown-menu w-100">
                        <div className="cart_item">
                            <div className="cart_item--sub">
                                <button className="btn btn-success text-uppercase w-100">đăng nhập</button>
                                <button className="btn btn-success text-uppercase w-100 mt-2">đăng ký</button>
                            </div>
                            <hr />
                            <div className="signin--socialnetwork">
                                <button className="btn w-100">
                                    <i className="fab fa-facebook-f mr-3"></i>
                                    Đăng nhập bằng Facebook
                                </button>
                                <button className="btn mt-2 w-100">
                                    <i className="fab fa-google-plus-g mr-3"></i>
                                    Đăng nhập bằng Gmail
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(CartLg);

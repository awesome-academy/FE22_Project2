import React, { Component } from 'react';
import { connect } from 'react-redux';

import ImgSearch from '../../../../images/HOME/btn-search.png';
import ImgShoppingCart from "../../../../images/HOME/shoppoing-cart.png";
import CartItem from "./CartItem";
import { clickDeleteItem} from "../../../../redux/actions";

class CartLg extends Component {
    constructor(props) {
        super(props);
        this.onRemove = this.onRemove.bind(this);
    }

    loadData() {
        const { products } = this.props;
        let arrItemCart = JSON.parse(localStorage.getItem("id-item--cart"));
        let data = [];
        if (!arrItemCart) arrItemCart = [];

        if (arrItemCart) {
            for (var idx of arrItemCart) {
                for (var item of products) {
                    if (parseInt(idx.id) === parseInt(item.id)) {
                        item = {...item, count: idx.count};
                        data.push(item);
                    }
                }
            }
        }
        return data;
    }

    onRemove(item) {
        return (event) => {
            let arrItemRemove = JSON.parse(localStorage.getItem("id-item--cart"));

            let idx = arrItemRemove.findIndex(obj => obj.id === item.id);
            arrItemRemove.splice(idx, 1);

            localStorage.setItem("id-item--cart", JSON.stringify(arrItemRemove));
        }
    }

    render() {
        const list = this.loadData();
        let sum = 0;
        for (var l of list) {
            sum+=l.count;
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
                                    list.map((item, idx) => <CartItem key={idx}
                                                                      count={item.count}
                                                                      path={item.image}
                                                                      price={item.price}
                                                                      productName={item.productName}
                                                                      onClick={this.onRemove(item)}/>)
                                }
                            </div>
                            <hr />
                            {/* Total price in cart*/}
                            <div className="total--price" />
                            <button className="text-uppercase btn btn-dark mb-3 mt-2">Giỏ hàng</button>
                        </div>
                    </div>
                </div><a href="#"><img src={ImgSearch} alt="" /></a>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(CartLg);

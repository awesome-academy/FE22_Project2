import React, { Component } from 'react';
import ImgShoppingCart from "../../../../images/HOME/shoppoing-cart.png";
import ImgSearch from "../../../../images/HOME/btn-search.png";

class CartSm extends Component {
    render() {
        return (
            <div className="img--tool" id="manager--tool--1" alt="">
                <div className="cart dropdown pr-3 pr-md-1"><a className="mr-lg-3 show-amount-item" href="#"><img src={ImgShoppingCart} alt=""/><span className="badge badge-pill badge-success">0</span></a>
                    <div className="dropdown-menu w-100">
                        <div className="cart_item">
                            <div className="cart_item--sub" />
                            <hr />
                            {/* Total price in cart*/}
                            <div className="total--price" /><a href="#">
                            <button className="text-uppercase btn btn-dark mb-3 mt-2">Giỏ hàng</button></a>
                        </div>
                    </div>
                </div><a href="#"><img src={ImgSearch} alt="" /></a>
            </div>
        );
    }
}

export default CartSm;
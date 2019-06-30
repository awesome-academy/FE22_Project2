import React, { Component } from 'react';

import imgRemove from '../../../../images/HOME/shopping-cart--icon--remove.png';

class CartItem extends Component {
    render() {
        const { count, path, price, 
            productName, onClick } = this.props;
        return (
            <div className="item--sub--sub mt-lg-1 pt-lg-1 mt-2">
                <div className="cart_item--show w-50">
                    <span className="badge badge-pill badge-success">{count}</span>
                    <img className="img-fluid" src={require("../../../../images/HOME/"+path+"")} alt="Product" />
                </div>
                <div className="item--sub--sub--content">
                    <span className="pl-2">{productName}</span>
                    <span className="pl-2">{price}.000<sup>đ</sup></span>
                </div>
                <img className="cart-item--remove" onClick={onClick} src={imgRemove} alt="icon" />
            </div>
        );
    }
}

export default CartItem;
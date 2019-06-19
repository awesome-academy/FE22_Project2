import React, { Component } from 'react';
import ImgShoppingCart from "../../../../images/HOME/shoppoing-cart.png";
import ImgSearch from "../../../../images/HOME/btn-search.png";
import connect from "react-redux/es/connect/connect";
import CartItem from "./CartItem";
import {addItemSelected} from "../../../../redux/actions";

class CartSm extends Component {
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
        for (var it of productSelected) {
            sum += it.count;
        }
        return (
            <div className="img--tool" id="manager--tool--1">
                <div className="cart dropdown pr-3 pr-md-1">
                    <a className="mr-lg-3 show-amount-item" href="#">
                        <img src={ImgShoppingCart} alt=""/><span className="badge badge-pill badge-success">{sum}</span>
                    </a>
                    <div className="dropdown-menu w-100">
                        <div className="cart_item">
                            <div className="cart_item--sub">
                                {
                                    productSelected.map((item, idx) => <CartItem key={idx}
                                                                      count={item.count}
                                                                      path={item.image}
                                                                      price={item.price}
                                                                      productName={item.productName}
                                                                                 onClick={this.onRemove(item)}/>)
                                }
                            </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(CartSm);
import React, { Component } from 'react';
import connect from "react-redux/es/connect/connect";
import { Link } from "react-router-dom";
import {addItemSelected, loadDataUsers} from "../../../../redux/actions";

import ImgShoppingCart from "../../../../images/HOME/shoppoing-cart.png";
import ImgSearch from "../../../../images/HOME/btn-search.png";

import CartItem from "./CartItem";
import Logon from "../../../../pages/shopping-cart/component/Logon";
import Login from "../../../../pages/shopping-cart/component/Login";

const urlUsers = process.env.REACT_APP_USERS;

class CartSm extends Component {
    constructor(props) {
        super(props);
        this.onRemove = this.onRemove.bind(this);
    }

    componentDidMount() {
        // Fetch Data Users from API
        const { data } = this.props;
        fetch(urlUsers)
            .then(res => res.json())
            .then(
                (result) => {
                    data(result);
                },
                (error) => {
                    console.log(error);
                }
            );
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

    checkLogin() {
        let check = JSON.parse(localStorage.getItem("logon"));
        if (!check) check = false;
        return check;
    }

    render() {
        const { productSelected, users } = this.props;
        const user = JSON.parse(localStorage.getItem("logon"));
        let sum = 0;
        let total = 0, userLogon = {};
        let arr = productSelected;
        if (!arr) arr = [];
        for (var it of arr) {
            sum += it.count;
            total += (it.count*it.price);
        }

        if (user) {
            for (var u of users) {
                if (u.id == user.id) {
                    userLogon = u;
                }
            }
        }

        return (
            <div className="img--tool" id="manager--tool--1">
                <div className="cart dropdown show-amount-item pr-3 pr-md-1">
                    <Link className="mr-lg-3" to="/shopping-cart">
                        <img src={ImgShoppingCart} alt="" /><span className="badge badge-pill badge-success">{sum}</span>
                    </Link>
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
                            <Link to="/shopping-cart"><button className="text-uppercase btn btn-dark mb-3 mt-2">Giỏ hàng</button></Link>
                        </div>
                    </div>
                </div>
                <a href="#"><img src={ImgSearch} alt="" /></a>
                <div className="cart dropdown account pl-4">
                    <Link className="mr-lg-3" to="/shopping-cart">
                        <i className="fas fa-user"></i>
                    </Link>
                    {
                        this.checkLogin() && <Logon name={userLogon.lastName} /> // Nếu trả về true hiển thị layout đã đăng nhập
                    }
                    {
                        !this.checkLogin() && <Login/> // Nếu trả về false hiển thị layout chưa đăng nhập
                    }
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        productSelected: state.productSelected,
        users: state.users
    }
}

function mapDispatchToProps(dispatch) {
    return {
        add: (item) => {
            dispatch(addItemSelected(item));
        },
        data: (list) => {
            dispatch(loadDataUsers(list));
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(CartSm);
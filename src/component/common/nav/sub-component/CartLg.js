import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { addItemSelected, loadDataUsers } from "../../../../redux/actions";

import ImgSearch from '../../../../images/HOME/btn-search.png';
import ImgShoppingCart from "../../../../images/HOME/shoppoing-cart.png";
import CartItem from "./CartItem";
import Logon from "./Logon";
import Login from "./Login";

const urlUsers = process.env.REACT_APP_USERS;

class CartLg extends Component {
    constructor(props) {
        super(props);
        this.onRemove = this.onRemove.bind(this);
        this.onRedirectCart = this.onRedirectCart.bind(this);
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

    onRedirectCart(event) {
        const account = JSON.parse(localStorage.getItem("logon")); // get user current login account
        const fb = JSON.parse(localStorage.getItem("access")); // get user current login facebook

        if (account || fb) {
            window.location.href = "/shopping-cart";
        }
    }

    onRemove(item) {
        return (event) => {
            const { productSelected, remove } = this.props;
            let arrItemRemove = productSelected;

            let idx = arrItemRemove.findIndex(obj => {return obj.id === item.id && obj.status === 1});
            arrItemRemove.splice(idx, 1);

            localStorage.setItem("id-item--cart", JSON.stringify(arrItemRemove));
            remove(arrItemRemove);
        }
    }

    checkLogin() {
        let user = JSON.parse(localStorage.getItem("logon")); // Check login by account
        let access = JSON.parse(localStorage.getItem("access")); // Check login by facebook
        let test;

        if (!user) {
            if (!access) {
                test = false; // If don't have anyone login
            } else {
                test = true; // If Login with fb
            }
        } else {
            test = true; // If login with account
        }

        return test;
    }

    render() {
        const { productSelected, users } = this.props;
        const user = JSON.parse(localStorage.getItem("logon"));
        const access = JSON.parse(localStorage.getItem("access"));

        let sum = 0;
        let total = 0;
        let nameShow = '';
        let temp = [];
        let arr = productSelected;

        // Get Total product had choose
        if (!arr) arr = [];

        for (var it of arr) {
            if (it.status === 1) {
                total += (it.count*it.price);
                sum += it.count;
                temp.push(it);
            }
        }
        // Get Total product had choose

        // Get name who login
        if (user) {
            for (var u of users) {
                if (u.id === user.id) {
                    nameShow = u.lastName;
                }
            }
        }
        else if (access) {
            nameShow = access.profile.short_name;
        }
        // Get name who login

        return (
            <div className="img--tool" id="manager--tool--2" >
                <div className="cart dropdown show-amount-item pr-3 pr-md-1">
                    <div onClick={this.onRedirectCart} className="mr-2 icon-cart">
                        <img src={ImgShoppingCart} alt="" /><span className="badge badge-pill badge-success">{sum}</span>
                    </div>
                    <div className="dropdown-menu w-100">
                        <div className="cart_item">
                            <div className="cart_item--sub">
                                {
                                    temp.map((item, idx) => <CartItem key={idx}
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
                            <button onClick={this.onRedirectCart} className="text-uppercase btn btn-dark mb-3 mt-2">Giỏ hàng</button>
                        </div>
                    </div>
                </div>
                <Link to="/"><img src={ImgSearch} alt="" /></Link>
                <div className="cart dropdown account pl-4">
                    <div onClick={this.onRedirectCart} className="mr-lg-3 icon-cart">
                        <i className="fas fa-user"/>
                    </div>
                    {
                        this.checkLogin() && <Logon name={nameShow} /> // Nếu trả về true hiển thị layout đã đăng nhập
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
        remove: (item) => {
            dispatch(addItemSelected(item));
        },
        data: (list) => {
            dispatch(loadDataUsers(list));
        }
    };
}

export default  connect(mapStateToProps, mapDispatchToProps)(CartLg);

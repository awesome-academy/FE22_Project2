import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import {addItemSelected, loadDataUsers} from "../../../../redux/actions";

import ImgSearch from '../../../../images/HOME/btn-search.png';
import ImgShoppingCart from "../../../../images/HOME/shoppoing-cart.png";
import CartItem from "./CartItem";
import Logon from "../../../../pages/shopping-cart/component/Logon";
import Login from "../../../../pages/shopping-cart/component/Login";

const urlUsers = process.env.REACT_APP_USERS;

class CartLg extends Component {
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
        let user = JSON.parse(localStorage.getItem("logon")); // Check login by account
        let access = JSON.parse(localStorage.getItem("access")); // Check login by facebook
        let test;

        if (!user) {
            if (!access) {
                test = false;
            } else {
                test = true;
            }
        } else {
            test = true;
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
        let arr = productSelected;
        let temp = [];

        // Get Total product had choose
        if (!arr) arr = [];

        for (var it of arr) {
            sum += it.count;
            total += (it.count*it.price);
            if (it.status === 1) {
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
                    <Link className="mr-lg-3" to="/shopping-cart">
                        <img src={ImgShoppingCart} alt="" /><span className="badge badge-pill badge-success">{sum}</span>
                    </Link>
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
                            <Link to="/shopping-cart"><button className="text-uppercase btn btn-dark mb-3 mt-2">Giỏ hàng</button></Link>
                        </div>
                    </div>
                </div>
                <Link to="/"><img src={ImgSearch} alt="" /></Link>
                <div className="cart dropdown account pl-4">
                    <Link className="mr-lg-3" to="/shopping-cart">
                        <i className="fas fa-user"></i>
                    </Link>
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
        add: (item) => {
            dispatch(addItemSelected(item));
        },
        data: (list) => {
            dispatch(loadDataUsers(list));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartLg);

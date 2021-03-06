import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import {loadDataCarts} from "../../../../redux/actions";

const urlCarts = process.env.REACT_APP_CARTS;

class Logon extends Component {
    constructor(props) {
        super(props);
        this.handlerLogon = this.handlerLogon.bind(this);
    }

    handlerLogon(event) {
        const { carts } = this.props;

        let dataSelected = JSON.parse(localStorage.getItem("id-item--cart")); // get data in cart of user current
        const account = JSON.parse(localStorage.getItem("logon")); // get user current login account
        const fb = JSON.parse(localStorage.getItem("access")); // get user current login facebook

        let dataUser = {};

        if (!dataSelected) dataSelected = [];

        if (account) dataUser = account;
        else if (fb) dataUser = fb.profile;

        let id = 1;
        if (carts) {
            id = carts[carts.length-1].id + 1; // Get next Id
        }

        if (!this.checkUserHad(dataUser.id, carts)) {
            let dataCart = {id, idUser: dataUser.id}; // add data user and data cart current
            let itemSelected = [];

            for (var ca of carts) {
                if (ca.idUser === dataUser.id) {
                    for (var item of ca.itemSelected) {
                        itemSelected.push(item);
                    }
                }
            }

            for (var dt of dataSelected) {
                itemSelected.push(dt); // Push Data of localStorage
            }
            if (itemSelected.length > 0) {
                dataCart = {...dataCart, itemSelected}; // Data to add DB
                this.pushDataCarts(dataCart);
            }
        } else {
            let cart = carts.find(c => c.idUser === dataUser.id);
            let id = cart.id;
            let dataCart = {id, idUser: dataUser.id}; // add data user and data cart current
            let itemSelected = [];

            for (var c of carts) {
                if (c.idUser === dataUser.id) {
                    for (var selected of c.itemSelected) {
                        itemSelected.push(selected);
                    }
                }
            }

            for (var data of dataSelected) {
                itemSelected.push(data); // Push Data of localStorage
            }
            dataCart = {...dataCart, itemSelected}; // Data to add DB
            this.editDataCarts(dataCart, id);
        }

        localStorage.removeItem("logon");
        localStorage.removeItem("access");
        localStorage.removeItem("id-item--cart");
        window.location.reload();
    }

    checkUserHad(userId, carts) {
        const idx = carts.findIndex(c => c.idUser === userId);
        if (idx <= -1) return false;
        return true;
    }

    componentDidMount() {
        // Fetch Data Carts from API
        const { dataCart } = this.props;
        fetch(urlCarts)
            .then(res => res.json())
            .then(
                (result) => {
                    dataCart(result);
                },
                (error) => {
                    console.log(error);
                }
            );
    }

    async pushDataCarts(obj) {
        // POST Data Carts
        await fetch(urlCarts, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj)
        });
    }

    async editDataCarts(obj, id) {
        // PUT Data Carts
        await fetch(urlCarts+"/"+id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj)
        });
    }

    render() {
        const { name } = this.props;
        return (
            <div className="dropdown-menu menu-logon w-100">
                <div className="cart_item accout--logon">
                    <Link className="mb-2" to="/shopping-cart"><i className="far fa-eye"/>&nbsp; Xin chào, {name}</Link>
                    <hr/>
                    <Link to="/shopping-cart"><i className="far fa-user"/>&nbsp; Tài khoản của tôi</Link>
                    <Link to="/" onClick={this.handlerLogon}><i className="fas fa-sign-out-alt"/>&nbsp; Đăng xuất</Link>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.users,
        carts: state.carts
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dataCart: (list) => {
            dispatch(loadDataCarts(list));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Logon);

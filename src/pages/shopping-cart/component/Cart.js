import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import _ from 'lodash';

import CartItem from "./CartItem";
import {addItemSelected, loadDataCarts} from "../../../redux/actions";

const urlCarts = process.env.REACT_APP_CARTS;

class Cart extends Component {
    constructor(props) {
        super(props);
        this.onRemove = this.onRemove.bind(this);
        this.onPayment = this.onPayment.bind(this);
        this.btnPayment = React.createRef();
        this.state = {
            check: true,
            dataCarts: []
        }
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

    async getAgainData() {
        await fetch(urlCarts)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        dataCarts: result
                    });
                },
                (error) => {
                    console.log(error);
                }
            );
    }

    paymentTheCart(result) {
        const account = JSON.parse(localStorage.getItem("logon")); // get user current login account
        const fb = JSON.parse(localStorage.getItem("access")); // get user current login facebook
        let carts = result; // Set Data for state

        if (!account) { // Check login account
            if (!fb) { // Check login facebook

            } else { // If login by facebook
                let obj = carts.find(c => c.idUser === fb.profile.id);
                // this.paymentCart(obj);
            }
        } else { // If login by facebook
            let obj = carts.find(c => c.idUser === account.id);
            // console.log(obj);
            this.paymentCart(obj);
        }
    }

    onPayment(event) {
        this.getAgainData(); // Get Data Cart from API
        this.paymentTheCart(this.state.dataCarts);
    }

    checkCart(test, dataSelected) {
        for (var t of test) {
            for (var d of dataSelected) {
                if (_.isEqual(t, d)) {
                    return true;
                }
            }
        }
        return false;
    }

    paymentCart(obj) {
        const day = `${new Date().getDate()}/${new Date().getMonth()+1}/${new Date().getFullYear()}`;
        let dataSelected = JSON.parse(localStorage.getItem("id-item--cart"));
        for (var item of obj.itemSelected) {
            item.status = 2;
        }

        var result = window.confirm("Want to delete?");
        if (result) { // If you click OK
            let test = [...obj.itemSelected]; // Clone data cart of object current

            var data = _.differenceWith(dataSelected, test, _.isEqual);

            for (var d of data) {
                d.status = 2;
            }

            var a = [...test, ...data];
            let dataSave = {...obj, id: obj.id, itemSelected: a}; // New Data will save in DB
            this.deleteDataCarts(obj.id);
            this.pushDataCarts(dataSave);

            localStorage.removeItem("id-item--cart");
            window.location.reload();
        }
    }

    async deleteDataCarts(id) {
        // DELETE Data Carts
        await fetch(urlCarts+"/"+id, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        });
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

    componentDidMount() {
        this.getAgainData();
        let dataSelected = JSON.parse(localStorage.getItem("id-item--cart"));
        const account = JSON.parse(localStorage.getItem("logon")); // get user current login account
        const fb = JSON.parse(localStorage.getItem("access")); // get user current login facebook

        if (!account) {
            if (!fb) {
                this.setState({
                    check: true // Check if don't have anybody login => disable button payment
                });
            } else {
                if (!dataSelected) {
                    this.setState({
                        check: true // If login by facebook and don't have the data in cart => disable button payment
                    });
                } else {
                    if (dataSelected.length <= 0) {
                        this.setState({
                            check: true // If login by facebook have the cart but haven't any product in cart => disable button payment
                        });
                    } else {
                        this.setState({
                            check: false // if login by facebook have the product in cart => enable button payment
                        });
                    }
                }
            }
        } else {
            if (!dataSelected) {
                this.setState({
                    check: true // If login by account and don't have the data in cart => disable button payment
                });
            } else {
                if (dataSelected.length <= 0) {
                    this.setState({
                        check: true // If login by account have the cart but haven't any product in cart => disable button payment
                    });
                } else {
                    this.setState({
                        check: false // if login by account have the product in cart => enable button payment
                    });
                }
            }
        }
    }

    render() {
        const { productSelected } = this.props;
        let itemSelected = productSelected;
        if (!itemSelected) itemSelected = [];

        let temp = [];
        for (var item of itemSelected) {
            if (item.status === 1) {
                temp.push(item);
            }
        }
        return(
            <div className="table--cart ml-3">
                <h3 className="text-uppercase mt-3 mb-3">Giỏ hàng</h3>
                <div className="cart--table mb-5">
                    <table className="table table-bordered table-responsive-sm">
                        <thead>
                        <tr>
                            <th className="text-uppercase text-center">Ảnh</th>
                            <th className="text-uppercase text-center">Tên sản phẩm</th>
                            <th className="text-uppercase text-center">Giá</th>
                            <th className="text-uppercase text-center">Số lượng</th>
                            <th className="text-uppercase text-center">Tổng số</th>
                            <th className="text-uppercase text-center">Xóa</th>
                        </tr>
                        </thead>
                        <tbody className="tinfo_cart">
                            {
                                temp.map((item, idx) => <CartItem key={idx}
                                                                  path={item.image}
                                                                  count={item.count}
                                                                  name={item.productName}
                                                                  price={item.price}
                                                                  onClick={this.onRemove(item)}/>)
                            }
                        </tbody>
                    </table>
                    <div className="cart_btn text-uppercase">
                        <Link to="/products"><div className="btn btn-dark">Tiếp tục mua hàng</div></Link>
                        <button ref={this.btnPayment}
                             disabled={ this.state.check }
                             onClick={this.onPayment}
                             className="btn btn-dark btn--update">Thanh toán</button>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        productSelected: state.productSelected,
        carts: state.carts
    }
}

function mapDispatchToProps(dispatch) {
    return {
        add: (item) => {
            dispatch(addItemSelected(item));
        },
        dataCart: (list) => {
            dispatch(loadDataCarts(list));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
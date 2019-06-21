import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import CartItem from "./CartItem";
import {addItemSelected} from "../../../redux/actions";

const urlCarts = process.env.REACT_APP_CARTS;

class Cart extends Component {
    constructor(props) {
        super(props);
        this.onRemove = this.onRemove.bind(this);
        this.onPayment = this.onPayment.bind(this);
        this.btnPayment = React.createRef();
        this.state = {
            check: true
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

    onPayment(event) {
        const account = JSON.parse(localStorage.getItem("logon")); // get user current login account
        const fb = JSON.parse(localStorage.getItem("access")); // get user current login facebook
        const { carts } = this.props;

        if (!account) {
            if (!fb) {

            } else {
                let obj = carts.find(c => c.idUser === fb.profile.id);
                this.paymentCart(obj);
            }
        } else {
            let obj = carts.find(c => c.idUser === account.id);
            this.paymentCart(obj);
        }
    }

    paymentCart(obj) {
        for (var item of obj.itemSelected) {
            item.status = 2;
        }
        var result = window.confirm("Want to delete?");
        if (result) {
            localStorage.removeItem("id-item--cart");
            this.editDataCarts(obj, obj.id);
            window.location.reload();
        }
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

    componentDidMount() {
        const account = JSON.parse(localStorage.getItem("logon")); // get user current login account
        const fb = JSON.parse(localStorage.getItem("access")); // get user current login facebook

        if (!account) {
            if (!fb) {
                this.setState({
                    check: true
                });
            } else {
                this.setState({
                    check: false
                });
            }
        } else {
            this.setState({
                check: false
            });
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
                                                                             price={item.price} onClick={this.onRemove(item)}/>)
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
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
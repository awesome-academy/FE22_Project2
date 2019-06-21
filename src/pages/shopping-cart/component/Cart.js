import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import CartItem from "./CartItem";
import {addItemSelected} from "../../../redux/actions";

class Cart extends Component {
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
        let itemSelected = productSelected;
        if (!itemSelected) itemSelected = [];
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
                                itemSelected.map((item, idx) => <CartItem key={idx}
                                                                             path={item.image}
                                                                             count={item.count}
                                                                             name={item.productName}
                                                                             price={item.price} onClick={this.onRemove(item)}/>)
                            }
                        </tbody>
                    </table>
                    <div className="cart_btn text-uppercase">
                        <Link to="/products"><div className="btn btn-dark">Tiếp tục mua hàng</div></Link>
                        <Link to="/"><div className="btn btn-dark btn--update">Thanh toán</div></Link>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
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

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
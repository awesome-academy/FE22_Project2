import React, { Component } from 'react';
import CartItem from "./CartItem";

class Cart extends Component {
    render() {
        return(
            <div className="table--cart">
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
                            <CartItem path="product_1.jpg" count="1" name="OHUI" price="100"/>
                        </tbody>
                    </table>
                    <div className="cart_btn text-uppercase"><a href="#">
                        <div className="btn btn-dark">Tiếp tục mua hàng</div></a><a href="#">
                        <div className="btn btn-dark btn--update">Thanh toán</div></a></div>
                </div>
            </div>
        );
    }
}

export default Cart;
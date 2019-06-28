import React, { Component } from 'react';
import ItemProduct from "./ItemProduct";

class TableProducts extends Component {
    render() {
        return (
            <div className="card mb-3 mt-4">
                <div className="card-header">
                    <i className="fas fa-table"/> Bảng Sản Phẩm
                </div>
                <div className="card-body">
                    <div className="cart--table mb-5">
                        <table className="table table-bordered table-responsive-sm">
                            <thead>
                            <tr>
                                <th className="text-uppercase text-center">Ảnh</th>
                                <th className="text-uppercase text-center">Tên sản phẩm</th>
                                <th className="text-uppercase text-center">Giá</th>
                                <th className="text-uppercase text-center">Mô Tả (Lưới)</th>
                                <th className="text-uppercase text-center">Tên Sản Phẩm (Danh Sách)</th>
                                <th className="text-uppercase text-center">Giảm giá (%)</th>
                                <th className="text-uppercase text-center">Loại Sản Phẩm</th>
                                <th className="text-uppercase text-center">Hoạt động</th>
                                <th className="text-uppercase text-center"> </th>
                            </tr>
                            </thead>
                            <tbody className="tinfo_cart">
                                <ItemProduct/>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
            </div>
        );
    }
}

export default TableProducts;

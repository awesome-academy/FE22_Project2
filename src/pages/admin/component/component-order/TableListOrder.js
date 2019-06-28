import React, { Component } from 'react';
import ItemOrder from "./ItemOrder";

class TableListOrder extends Component {
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
                                <th className="text-uppercase text-center">Mã đơn hàng</th>
                                <th className="text-uppercase text-center">Tên khách hàng</th>
                                <th className="text-uppercase text-center">Tổng đơn hàng</th>
                                <th className="text-uppercase text-center">Trạng thái</th>
                                <th className="text-uppercase text-center"> </th>
                            </tr>
                            </thead>
                            <tbody className="tinfo_cart">
                                <ItemOrder/>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
            </div>
        );
    }
}

export default TableListOrder;
import React, { Component } from 'react';

class RowItemOrder extends Component {
    render() {
        return (
            <tr>
                <td className="text-center">
                    <div className="table--item content--cart"><span>111111</span></div>
                </td>
                <td className="text-center">
                    <div className="table--item"><span>AAA</span></div>
                </td>
                <td className="text-center">
                    <div className="table--item"><span>100.00đ</span></div>
                </td>
                <td className="text-center">
                    <div className="table--item"><span>Đã Giao hàng</span></div>
                </td>
                <td className="text-center">
                    <div className="table--item">
                        <button className="btn btn-warning">Sửa</button>
                    </div>
                </td>
            </tr>
        );
    }
}

export default RowItemOrder;
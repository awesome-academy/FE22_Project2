import React, { Component } from 'react';
import ItemProduct from "./ItemProduct";
import connect from "react-redux/es/connect/connect";
import { redirectProducts } from "../../../../redux/actions";

class TableProducts extends Component {
    constructor(props) {
        super(props);
        this.onClickAdd = this.onClickAdd.bind(this);
    }

    onClickAdd(event) {
        const { redirect } = this.props;
        redirect(2); // Redirect to AddProduct
    }

    render() {
        return (
            <div className="card mb-3 mt-4">
                <button className="btn btn-primary text-uppercase mb-3" onClick={this.onClickAdd}>Thêm</button>
                <div className="card-header">
                    <i className="fas fa-table"/> Bảng Sản Phẩm
                </div>
                <div className="card-body">
                    <div className="cart--table mb-5">
                        <table className="table table-bordered table-responsive-sm">
                            <thead>
                            <tr>
                                <th className="text-uppercase text-center">Ảnh</th>
                                <th className="text-uppercase text-center">Tên sản phẩm (Lưới)</th>
                                <th className="text-uppercase text-center">Giá</th>
                                <th className="text-uppercase text-center">Mô Tả (Lưới)</th>
                                <th className="text-uppercase text-center">Tên Sản Phẩm (Danh Sách)</th>
                                <th className="text-uppercase text-center">Mô tả (Danh Sách)</th>
                                <th className="text-uppercase text-center">Giảm giá (%)</th>
                                <th className="text-uppercase text-center">Loại Sản Phẩm</th>
                                <th className="text-uppercase text-center">Hoạt động</th>
                                <th className="text-uppercase text-center"> </th>
                            </tr>
                            </thead>
                            <ItemProduct/>
                        </table>
                    </div>
                </div>
                <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        redirectProducts: state.redirectProducts
    }
}

function mapDispatchToProps(dispatch) {
    return {
        redirect: (item) => {
            dispatch(redirectProducts(item));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableProducts);

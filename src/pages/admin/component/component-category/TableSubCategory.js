import React, { Component } from 'react';
import ItemSubCategory from "./ItemSubCategory";

class TableSubCategory extends Component {
    render() {
        return (
            <div className="card mb-3 mt-4">
                <div className="card-header">
                    <i className="fas fa-table"/> Bảng Loại Sản Phẩm Con
                </div>
                <div className="card-body">
                    <div className="cart--table mb-5">
                        <table className="table table-bordered table-responsive-sm">
                            <thead>
                            <tr>
                                <th className="text-uppercase text-center">Tên Loại Sản phẩm Con</th>
                                <th className="text-uppercase text-center">Tên Loại Sản phẩm</th>
                                <th className="text-uppercase text-center">Hoạt động</th>
                                <th> </th>
                            </tr>
                            </thead>
                            <ItemSubCategory/>
                        </table>
                    </div>
                </div>
                <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
            </div>
        );
    }
}

export default TableSubCategory;

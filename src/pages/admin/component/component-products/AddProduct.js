import React, { Component } from 'react';

class AddProduct extends Component {
    render() {
        return (
            <form className="mt-3" action="#">
                <div className="form-group">
                    <label htmlFor="nameCate">Tên Sản Phẩm Hiện Dạng Lưới:</label>
                    <input type="text" className="form-control" id="nameCate" placeholder="Nhập tên sản phẩm"/>
                </div>
                <div className="form-group">
                    <label htmlFor="nameCate">Giá:</label>
                    <input type="text" className="form-control" id="nameCate" placeholder="Nhập tên sản phẩm"/>
                </div>
                <div className="form-group">
                    <label htmlFor="nameCate">Mô tả Hiện Dạng Lưới:</label>
                    <input type="text" className="form-control" id="nameCate" placeholder="Nhập tên sản phẩm"/>
                </div>
                <div className="form-group">
                    <label htmlFor="nameCate">Tên Sản Phẩm Hiện Dạng Danh Sách:</label>
                    <input type="text" className="form-control" id="nameCate" placeholder="Nhập tên sản phẩm"/>
                </div>
                <div className="form-group">
                    <label htmlFor="nameCate">Giảm giá(%):</label>
                    <input type="number" className="form-control" id="nameCate" placeholder="Nhập tên sản phẩm"/>
                </div>
                <div className="form-group">
                    <label htmlFor="nameCate">Loại sản phẩm:</label>
                    <select className="form-control" name="categoryProduct" id="category">
                        <option value="1" className="text-capitalize">Mỹ Phẩm</option>
                        <option value="2" className="text-capitalize">Nước Hoa</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="imgProduct">Hình hiển thị:</label>
                    <input type="file" className="form-control" id="imgProduct"/>
                </div>
                <button type="submit" className="btn btn-primary">Thêm</button>
            </form>
        );
    }
}

export default AddProduct;
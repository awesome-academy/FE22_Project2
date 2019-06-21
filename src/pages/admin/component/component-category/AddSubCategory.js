import React, { Component } from 'react';

class AddSubCategory extends Component {
    render() {
        return (
            <div className="mt-3">
                <div className="form-group">
                    <label htmlFor="nameCate">Tên sản phẩm con:</label>
                    <input type="text" className="form-control" id="nameCate" placeholder="Enter Name Category Sup"/>
                </div>

                <div className="form-group">
                    <label htmlFor="categoryName">Loại sản phẩm:</label>
                    <select name="category" id="categoryName" className="form-control">
                        <option>a</option>
                        <option>b</option>
                        <option>c</option>
                    </select>
                </div>

                <div className="form-group">
                    <button className="btn btn-primary">Add</button>
                </div>
            </div>
        );
    }
}

export default AddSubCategory;
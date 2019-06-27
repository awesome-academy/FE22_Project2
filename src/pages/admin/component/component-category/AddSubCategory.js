import React, { Component } from 'react';

class AddSubCategory extends Component {
    render() {
        return (
            <form className="form-horizontal ml-3 mt-3" action="#">
                <div className="form-group">
                    <label className="control-label" htmlFor="nameCate">Tên sản phẩm con:</label>
                    <input type="text" className="form-control" id="nameCate" placeholder="Enter Name Category Sup"/>
                </div>

                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Add</button>
                </div>
            </form>
        );
    }
}

export default AddSubCategory;
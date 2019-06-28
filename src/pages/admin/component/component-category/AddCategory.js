import React, { Component } from 'react';

class AddCategory extends Component {
    render() {
        return (
            <div className="mt-3">
                <div className="form-group">
                    <label htmlFor="nameCate">Name Category:</label>
                    <input type="text" className="form-control" id="nameCate" placeholder="Enter Name Category"/>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">Add</button>
                </div>
            </div>
        );
    }
}

export default AddCategory;
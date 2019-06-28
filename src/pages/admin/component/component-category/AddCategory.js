import React, { Component } from 'react';

class AddCategory extends Component {
    render() {
        return (
            <form className="mt-3" action="#">
                <div className="form-group">
                    <label htmlFor="nameCate">Name Category:</label>
                    <input type="text" className="form-control" id="nameCate" placeholder="Enter Name Category"/>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Add</button>
                </div>
            </form>
        );
    }
}

export default AddCategory;
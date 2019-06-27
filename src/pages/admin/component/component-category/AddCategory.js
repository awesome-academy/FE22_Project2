import React, { Component } from 'react';

class AddCategory extends Component {
    render() {
        return (
            <form className="form-horizontal mt-3" action="#">
                <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="nameCate">Name Category:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="nameCate" placeholder="Enter Name Category"/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <button type="submit" className="btn btn-primary">Add</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default AddCategory;
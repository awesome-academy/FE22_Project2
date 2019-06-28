import React, { Component } from 'react';
import ItemShow from "../sub-component/ItemShow";

class TableUsers extends Component {
    render() {
        return (
            <div className="card mb-3 mt-4">
                <ItemShow accept={false}/>
            </div>
        );
    }
}

export default TableUsers;
import React, { Component } from 'react';
import ItemShow from "./ItemShow";

class DataTable extends Component {
    render() {
        return (
            <div className="card mb-3 mt-4">
                <ItemShow accept={true}/>
            </div>
        );
    }
}

export default DataTable;
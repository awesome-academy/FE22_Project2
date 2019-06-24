import React, { Component } from 'react';
import { Link } from "react-router-dom";

class ProductPag extends Component {
    render() {
        return (
            <div className="product--pag">
                <div className="btnContainer" id="btnContainer">
                    <button className="custom--btn custom--active" id="grid"><i className="fa fa-th-large" /></button>
                    <button className="custom--btn" id="list"><i className="fas fa-list" /></button>
                    <div className="pagination float-right text-center">
                        <ul>
                            <li><Link to="#"><i className="fas fa-caret-left" /></Link></li>
                            <li><Link to="#">1</Link></li>
                            <li><Link to="#">2</Link></li>
                            <li><Link to="#">3</Link></li>
                            <li><Link to="#">4</Link></li>
                            <li><Link to="#"><i className="fas fa-caret-right" /></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductPag;
import React, { Component } from 'react';

class ProductPag extends Component {
    render() {
        return (
            <div className="product--pag">
                <div className="btnContainer" id="btnContainer">
                    <button className="custom--btn custom--active" id="grid"><i className="fa fa-th-large" /></button>
                    <button className="custom--btn" id="list"><i className="fas fa-list" /></button>
                    <div className="pagination float-right text-center">
                        <ul>
                            <li><a href="#"><i className="fas fa-caret-left" /></a></li>
                            <li><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                            <li><a href="#"><i className="fas fa-caret-right" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductPag;
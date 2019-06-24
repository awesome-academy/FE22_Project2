import React, { Component } from 'react';
import { Link } from "react-router-dom";

class titleAddress extends Component {
    render() {
        return (
            <div className="container mt-3">
                <nav className="breadcrumb--custom" aria-label="breadcrumb">
                    <ol className="breadcrumb pl-0">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="/products">Sản phẩm</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Trang sức</li>
                        <li className="breadcrumb-item active" aria-current="page">Lắc tay</li>
                    </ol>
                </nav>
            </div>
        );
    }
}

export default titleAddress;
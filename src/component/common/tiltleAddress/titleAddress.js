import React, { Component } from 'react';

class titleAddress extends Component {
    render() {
        return (
            <div className="container mt-3">
                <nav className="breadcrumb--custom" aria-label="breadcrumb">
                    <ol className="breadcrumb pl-0">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item"><a href="/">Sản phẩm</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Trang sức</li>
                        <li className="breadcrumb-item active" aria-current="page">Lắc tay</li>
                    </ol>
                </nav>
            </div>
        );
    }
}

export default titleAddress;
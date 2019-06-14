import React, { Component } from 'react';

class ProductTags extends Component {
    render() {
        return (
            <div className="product--tag mt-5">
                <h5 className="text-uppercase product--title pb-3">Tag sản phẩm</h5>
                <div className="product_item--tag mt-5">
                    <h5><span className="badge badge-secondary p-2 mb-2 ml-2">Hoa tai</span></h5>
                    <h5><span className="badge badge-secondary p-2 mb-2 ml-2">Son</span></h5>
                    <h5><span className="badge badge-secondary p-2 mb-2 ml-2">Nước hoa</span></h5>
                    <h5><span className="badge badge-secondary p-2 mb-2 ml-2">Giày</span></h5>
                    <h5><span className="badge badge-secondary p-2 mb-2 ml-2">Sandal</span></h5>
                    <h5><span className="badge badge-secondary p-2 mb-2 ml-2">Áo sơ mi</span></h5>
                    <h5><span className="badge badge-secondary p-2 mb-2 ml-2">Nước hoa</span></h5>
                    <h5><span className="badge badge-secondary p-2 mb-2 ml-2">Trẻ em</span></h5>
                    <h5><span className="badge badge-secondary p-2 mb-2 ml-2">Thời trang nữ</span></h5>
                </div>
            </div>
        );
    }
}

export default ProductTags;
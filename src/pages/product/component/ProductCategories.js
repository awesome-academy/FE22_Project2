import React, { Component } from 'react';

class ProductCategories extends Component {
    render() {
        return (
            <div>
                <div className="product--category">
                    <h5 className="text-uppercase product--title pb-3"><i className="fa fa-bars" /> &nbsp; Danh mục sản phẩm</h5>
                    <div id="accordion">
                        <button className="accordion text-uppercase">Mỹ phẩm</button>
                        <div className="panel">
                            <ul>
                                <li>Vòng tay</li>
                                <li>Nhẫn</li>
                                <li>Lắc chân</li>
                                <li>Phụ kiện khác</li>
                                <li>Giày lười Giày mọi</li>
                            </ul>
                        </div>
                        <button className="accordion text-uppercase">Trang sức</button>
                        <div className="panel">
                            <ul>
                                <li>Vòng tay</li>
                                <li>Nhẫn</li>
                                <li>Lắc chân</li>
                                <li>Phụ kiện khác</li>
                                <li>Giày lười Giày mọi</li>
                            </ul>
                        </div>
                        <button className="accordion text-uppercase">Phụ kiện</button>
                        <div className="panel">
                            <ul>
                                <li>Vòng tay</li>
                                <li>Nhẫn</li>
                                <li>Lắc chân</li>
                                <li>Phụ kiện khác</li>
                                <li>Giày lười Giày mọi</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductCategories;
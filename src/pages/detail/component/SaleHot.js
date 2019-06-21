import React, { Component } from 'react';

import ItemSaleHot from "./sub-component/ItemSaleHot";

class SaleHot extends Component {
    render() {
        return (
            <div className="detail_product--hot mt-lg-2">
                <h5 className="text-uppercase">Sản phẩm bán chạy</h5>
                <ItemSaleHot path="product_5.jpg"/>
            </div>
        );
    }
}

export default SaleHot;
import React, { Component } from "react";
import ItemSaleHot from "./sub-component/ItemSaleHot";

class RecentProducts extends Component {
    render() {
        return (
            <div className="detail_product--hot">
                <h5 className="text-uppercase">Sản phẩm mua nhiều nhất</h5>
                <ItemSaleHot path="product_5.jpg"/>
            </div>
        );
    }
}

export default RecentProducts;
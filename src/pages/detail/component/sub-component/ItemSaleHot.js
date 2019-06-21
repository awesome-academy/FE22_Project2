import React, { Component } from 'react';
import imgViewProduct from "../../../../images/Detail/view_product.png";

class ItemSaleHot extends Component {
    render() {
        const { path, name, price, onDetailProduct } = this.props;
        let img = path;
        if (!img) img = 'product_5.jpg';

        return (
            <div className="product--item mt-lg-3 pb-lg-3" onClick={onDetailProduct}>
                <div className="img-thumbnail">
                    <img className="img-fluid" src={require("../../../../images/HOME/"+img+"")} alt="Hot Product" />
                </div>
                <div className="product--info ml-lg-3">
                    <h6>{name}</h6>
                    <img className="mt-lg-3 mb-lg-2" src={imgViewProduct} alt="View" />
                    <span>{price}.000đ</span>
                </div>
            </div>
        );
    }
}

export default ItemSaleHot;
import React, { Component } from 'react';
import imgViewProduct from "../../../../images/Detail/view_product.png";

class ItemSaleHot extends Component {
    render() {
        const { path } = this.props;
        return (
            <div className="product--item mt-lg-5 pb-lg-5">
                <div className="img-thumbnail">
                    <img className="img-fluid" src={require("../../../../images/HOME/"+path+"")} alt="Hot Product" />
                </div>
                <div className="product--info ml-lg-3">
                    <h6>Mỹ phẩm châu Âu</h6>
                    <img className="mt-lg-3 mb-lg-2" src={imgViewProduct} alt="View" />
                    <span>355.000đ</span>
                </div>
            </div>
        );
    }
}

export default ItemSaleHot;
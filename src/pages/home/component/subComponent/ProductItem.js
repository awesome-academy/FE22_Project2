import React, { Component } from 'react';
import imgHeart from '../../../../images/HOME/heart.png';
import imgReload from '../../../../images/HOME/reload.png';
import imgProduct from '../../../../images/HOME/product_1.jpg';

class ProductItem extends Component {
    render() {
        return (
            <div className="item">
                <div className="img-thumbnail"><img className="img-fluid p-4" src={imgProduct} alt="product 1" /></div>
                <div className="product_item--info text-center mt-3">
                    <h6>TYFFANY</h6>
                    <h3 className="mb-4">Mỹ phẩm châu Âu</h3>
                    <div className="product--price mb-3"><span>355.000<sup>đ</sup></span><span>450.000<sup>đ</sup></span></div>
                    <div className="product--btn--buy pb-3">
                        <button className="btn btn-custom">Mua hàng</button>
                        <button className="btn btn-custom ml-1"><img src={imgHeart} alt="heart" /></button>
                        <button className="btn btn-custom ml-1"><img src={imgReload} alt="reload" /></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductItem;
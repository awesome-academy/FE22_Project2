import React, { Component } from 'react';
import imgHeart from '../../../../images/HOME/heart.png';
import imgReload from '../../../../images/HOME/reload.png';

class ProductItem extends Component {
    render() {
        const { name,
            decription,
            path,
            price,
            discount,
            onClick,
            onShowDetail} = this.props;
        return (
            <div className="item">
                <div className="img-thumbnail">
                    <img className="img-fluid p-4"
                         src={require("../../../../images/HOME/"+path+"")}
                         alt="product 1" onClick={onShowDetail}/>
                </div>
                <div className="product_item--info text-center mt-3">
                    <h6>{name}</h6>
                    <h3 className="mb-4">{decription}</h3>
                    <div className="product--price mb-3">
                        <span>{parseInt(price-(price*discount/100))}.000<sup>đ</sup></span>
                        <span>{price}.000<sup>đ</sup></span>
                    </div>
                    <div className="product--btn--buy pb-3">
                        <button className="btn btn-custom" onClick={onClick}>Mua hàng</button>
                        <button className="btn btn-custom ml-1"><img src={imgHeart} alt="heart" /></button>
                        <button className="btn btn-custom ml-1"><img src={imgReload} alt="reload" /></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductItem;
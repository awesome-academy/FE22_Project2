import React, { Component } from 'react';

import imgHeart from '../../../images/HOME/heart.png';
import imgReload from '../../../images/HOME/reload.png';

class ProductItem extends Component{
    render() {
        const { path } = this.props;
        return(
            <div className="item">
                <div className="img-thumbnail"><img className="img-fluid p-4" src={require('../../../images/HOME/'+path+'')} alt="product 1" /></div>
                <div className="product_item--info text-center mt-3">
                    <div className="product--info--grid">
                        <h6>'+data.titleGrid+'</h6>
                        <h3 className="mb-4">'+data.contentGrid+'</h3>
                        <div className="product--price mb-3"><span>'+data.price+'<sup>đ</sup></span></div>
                        <div className="product--btn--buy pb-3">
                            <button className="btn btn-custom btn--buy" value="'+data.id+'">Mua hàng</button>
                            <button className="btn btn-custom ml-1"><img src={imgHeart} alt="heart" /></button>
                            <button className="btn btn-custom ml-1"><img src={imgReload} alt="reload" /></button>
                        </div>
                    </div>
                    <div className="product--info--list">
                        <h3 className="pb-2">'+data.titleList+'</h3>
                        <div className="rating--like"><span><i className="fas fa-heart" /><i className="fas fa-heart" /><i className="fas fa-heart" /><i className="fas fa-heart" /><i className="fas fa-heart" /> ( 4 Lượt mua )</span>
                            <p className="pt-2">
                                '+data.contentList+'
                            </p>
                            <div className="product--price mb-3"><span>'+data.price+'<sup>đ</sup></span></div>
                            <div className="product--btn--buy pb-3">
                                <button className="btn btn-custom btn--buy" value="'+data.id+'">Mua hàng</button>
                                <button className="btn btn-custom ml-1"><img src={imgHeart} alt="heart" /></button>
                                <button className="btn btn-custom ml-1"><img src={imgReload} alt="reload" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductItem;
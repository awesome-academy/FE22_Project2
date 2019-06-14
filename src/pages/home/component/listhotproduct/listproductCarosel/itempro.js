import React, { Component } from 'react';
import Heart from '../../../../../images/HOME/heart.png'
import Reload from '../../../../../images/HOME/reload.png'

class itempro extends Component {
    render() {
        return (
            <div className="item">
                <div className="img-thumbnail"><img className="img-fluid p-4" src={"../../../../../" + this.props.image} alt="product 1" /></div>
                <div className="product_item--info text-center mt-3">
                    <h6>{this.props.namePro}</h6>
                    <h3 className="mb-4">{this.props.decription}</h3>
                    <div className="product--price mb-3"><span>{this.props.discount}<sup>đ</sup></span><span>{this.props.price}<sup>đ</sup></span></div>
                    <div className="product--btn--buy pb-3">
                        <button className="btn btn-custom">Mua hàng</button>
                        <button className="btn btn-custom ml-1"><img src={Heart} alt="heart" /></button>
                        <button className="btn btn-custom ml-1"><img src={Reload} alt="reload" /></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default itempro;
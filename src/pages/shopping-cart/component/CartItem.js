import React, { Component } from 'react';

import imgRemove from '../../../images/Shopping-cart/remove--icon.png';

class CartItem extends Component{
    render() {
        const { path, name, price, count } = this.props;
        return(
            <tr>
                <td className="text-center">
                    <img className="img-fluid" src={require('../../../images/HOME/'+path+'')} alt="product-bought"/>
                </td>
                <td className="text-uppercase text-center">
                    <div className="table--item content--cart"><span>{name}</span></div>
                </td>
                <td className="text-center">
                    <div className="table--item"><span>{price}.000đ</span></div>
                </td>
                <td className="text-center">
                    <div className="table--item">
                        <input className="input--value" type="number" value={count}/>
                    </div>
                </td>
                <td className="text-center">
                    <div className="table--item"><span>{parseInt(count*price)}.000đ</span></div>
                </td>
                <td>
                    <div className="table--item text-center">
                        <img className="item_icon--remove" src={imgRemove} alt="remove-icon"/>
                    </div>
                </td>
            </tr>
        );
    }
}

export default CartItem;
import React, { Component } from 'react';

import imgRemove from '../../../images/Shopping-cart/remove--icon.png';

class CartItem extends Component{
    constructor(props) {
        super(props);
        this.count = React.createRef();

        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        const { id } = this.props;
        const count = this.count.current.value;
        const dataSelected = JSON.parse(localStorage.getItem("id-item--cart"));

        let temp = {};
        for(var da of dataSelected) {
            if(da.status === 1) {
                if(da.id === id) {
                    temp = da;
                }
            }
        }

        let idx = dataSelected.indexOf(temp);
        let data = {...temp, count: parseInt(count)};

        let tam = [
            ...dataSelected.slice(0, idx),
            data,
            ...dataSelected.slice(idx + 1)
        ]
        console.log(tam);
    }

    render() {
        const { path, name, price, count, onClick } = this.props;
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
                        <input className="form-control input--value" 
                        type="number" min="1" ref={this.count}
                        defaultValue={count} onChange={this.onChange}/>
                    </div>
                </td>
                <td className="text-center">
                    <div className="table--item"><span>{parseInt(count*price)}.000đ</span></div>
                </td>
                <td>
                    <div className="table--item text-center">
                        <img className="item_icon--remove" src={imgRemove} onClick={onClick} alt="remove-icon"/>
                    </div>
                </td>
            </tr>
        );
    }
}

export default CartItem;
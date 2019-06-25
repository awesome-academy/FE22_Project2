import React, { Component } from 'react';

import imgHeart from '../../../images/HOME/heart.png';
import imgReload from '../../../images/HOME/reload.png';
import {addItemSelected} from "../../../redux/actions";
import connect from "react-redux/es/connect/connect";

class InfoDetail extends Component {
    constructor(props) {
        super(props);
        this.onClickAdd = this.onClickAdd.bind(this);
    }

    onClickAdd(item) {
        return (event) => {
            const { productSelected, add } = this.props;
            let countObject = productSelected;

            if (!countObject) { // First Array Check Count Init
                countObject = [];
                countObject.push({...item, count: 1, status: 1})
            }
            else { // Array Check Count exist
                let idx = countObject.findIndex(obj => obj.id === item.id); // Get index of element in Array Check Count
                if (idx > -1) // Found element in Array Check Count
                    countObject[idx].count += 1;
                else // Don't Found element in Array Check Count
                    countObject.push({...item, count: 1, status: 1})
            }
            localStorage.setItem('id-item--cart', JSON.stringify(countObject)); // Set LocalStorage for Array Check Count
            add(countObject);
        }
    }

    render() {
        let temp = JSON.parse(localStorage.getItem('item-detail'));
        if (!temp) temp = [];
        let item = temp[temp.length-1];
        return (
            <div className="detail_info mt-5 mb-5 mt-lg-0 mb-lg-0 col-lg-6 col-12">
                <div className="product--info--list">
                    <h3 className="pb-2 pb-lg-1 text-uppercase">{item.productNameList}</h3>
                    <span className="text-uppercase">{item.productName}</span>
                    <div className="product--price mb-3 mt-3 mb-lg-2 mt-lg-2">
                        <span>955.000đ &nbsp;</span><span>{item.price}.000đ</span>
                    </div>
                    <div className="rating--like">
                        <p className="pt-2 pt-lg-2">
                            {item.decriptionList}
                        </p>
                        <span className="text-uppercase">Màu sắc</span>
                        <select className="w-100 p-2 mt-3 mb-3 mt-lg-2 mb-lg-2 form-control" name="color">
                            <option value>Màu Bạc</option>
                            <option value>Màu Vàng</option>
                        </select>
                        <span className="text-uppercase">Size</span>
                        <select className="w-100 p-2 mt-3 mb-3 mt-lg-2 mb-lg-2 form-control" name="size">
                            <option value>12</option>
                            <option value>13</option>
                        </select>
                        <div className="product--btn--buy pb-3 mt-3 pb-lg-0 mb-lg-4 mt-lg-4">
                            <button className="btn btn-custom text-uppercase" onClick={this.onClickAdd(item)}>Mua hàng</button>
                            <button className="btn btn-custom ml-1"><img src={imgHeart} alt="heart" /></button>
                            <button className="btn btn-custom ml-1"><img src={imgReload} alt="reload" /></button>
                        </div>
                        <span className="ship">Shipping &amp; &nbsp;<span>Returns</span></span>
                        <br />
                        <img className="mt-3 mt-lg-2"
                             src={require("../../../images/Detail/product--connect.jpg")} alt="img connect" />
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        productSelected: state.productSelected
    }
}

function mapDispatchToProps(dispatch) {
    return {
        add: (item) => {
            dispatch(addItemSelected(item));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoDetail);
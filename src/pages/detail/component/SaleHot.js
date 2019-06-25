import React, { Component } from 'react';

import ItemSaleHot from "./sub-component/ItemSaleHot";
import {loadDataCarts} from "../../../redux/actions";
import connect from "react-redux/es/connect/connect";

const urlCarts = process.env.REACT_APP_CARTS;

class SaleHot extends Component {
    constructor(props) {
        super(props);
        this.onShowDetail = this.onShowDetail.bind(this);
    }

    componentDidMount() {
        let arrItemRecently = JSON.parse(localStorage.getItem('item-detail'));
        if (!arrItemRecently) window.location.href = '/';

        // Fetch Data Carts from API
        const { dataCart } = this.props;
        fetch(urlCarts)
            .then(res => res.json())
            .then(
                (result) => {
                    dataCart(result);
                },
                (error) => {
                    console.log(error);
                }
            );
    }

    onShowDetail(item) {
        return event => {
            let arrItemRecently = JSON.parse(localStorage.getItem('item-detail'));
            if (!arrItemRecently) arrItemRecently = [];

            let findItem = arrItemRecently.findIndex(it => it.id === item.id);
            if (findItem <= -1) {
                arrItemRecently.push(item);
            }

            localStorage.setItem('item-detail', JSON.stringify(arrItemRecently));
            window.location.href = '/detail';
        }
    }

    render() {
        const { carts } = this.props;
        let arrSaleHot = [];

        for (var c of carts) {
            for (var item of c.itemSelected) {
                if (item.status === 2) {
                    if (arrSaleHot.length < 3)
                        arrSaleHot.push(item);
                }
            }
        }

        return (
            <div className="detail_product--hot mt-lg-2">
                <h5 className="text-uppercase">Sản phẩm bán chạy</h5>
                {
                    arrSaleHot.map((item, idx) => <ItemSaleHot key={idx}
                                                               path={item.image}
                                                               name={item.decription}
                                                               price={item.price}
                                                               onDetailProduct={this.onShowDetail(item)}/>)
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        carts: state.carts
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dataCart: (list) => {
            dispatch(loadDataCarts(list));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SaleHot);

import React, { Component } from "react";
import ItemSaleHot from "./sub-component/ItemSaleHot";

class RecentProducts extends Component {
    constructor(props) {
        super(props);
        this.onShowDetail = this.onShowDetail.bind(this);
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
        let temp = JSON.parse(localStorage.getItem('item-detail'));
        if (!temp) temp = [];
        temp.reverse();
        let arr = [];
        if (temp.length > 3) {
            for (var i = 0; i < 3; i++) {
                arr.push(temp[i]);
            }
        } else {
            arr = [...temp];
        }

        return (
            <div className="detail_product--hot">
                <h5 className="text-uppercase">Sản phẩm xem gần đây</h5>
                {
                    arr.map((item, idx) => <ItemSaleHot key={idx}
                                                         path={item.image}
                                                         name={item.decription}
                                                         price={item.price}
                                                         onDetailProduct={this.onShowDetail(item)}/>)
                }
            </div>
        );
    }
}

export default RecentProducts;
import React, { Component } from 'react';
import HistoryItem from "./HistoryItem";
import connect from "react-redux/es/connect/connect";

const urlCarts = process.env.REACT_APP_CARTS;

class HistoryOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSelected: []
        }
    }

    checkShowHistory(result) {
        const account = JSON.parse(localStorage.getItem("logon")); // get user current login account
        const fb = JSON.parse(localStorage.getItem("access")); // get user current login facebook
        if (!account) {
            if (!fb) {

            } else {
                if (result) {
                    let obj = result.find(c => c.idUser === fb.profile.id);
                    if (obj){
                        this.setState({
                            dataSelected: obj.itemSelected
                        });
                    }
                }
            }
        } else {
            if (result) {
                let obj = result.find(c => c.idUser === account.id);
                if (obj){
                    this.setState({
                        dataSelected: obj.itemSelected
                    });
                }
            }
        }
    }

    async getDataHistory() {
        await fetch(urlCarts)
            .then(res => res.json())
            .then(
                (result) => {
                    this.checkShowHistory(result);
                },
                (error) => {
                    console.log(error);
                }
            );
    }

    componentDidMount() {
        this.getDataHistory();
    }

    render() {
        const { dataSelected } = this.state;
        let itemSelected = dataSelected;
        if (!itemSelected) itemSelected = [];

        let temp = [];
        for (var item of itemSelected) {
            if (item.status === 2 || item.status === 3) {
                temp.push(item);
            }
        }

        return (
            <div className="table_history--order ml-3">
                <h3 className="text-uppercase mt-3 mb-3">Đơn hàng của tôi</h3>
                <div className="cart--table mb-5">
                    <table className="table table-bordered table-responsive-sm">
                        <thead>
                        <tr>
                            <th className="text-uppercase text-center">Ảnh</th>
                            <th className="text-uppercase text-center">Tên sản phẩm</th>
                            <th className="text-uppercase text-center">Giá</th>
                            <th className="text-uppercase text-center">Số lượng</th>
                            <th className="text-uppercase text-center">Tổng số</th>
                            <th className="text-uppercase text-center">Trạng Thái</th>
                            <th className="text-uppercase text-center">Ngày thanh toán</th>
                        </tr>
                        </thead>
                        <tbody className="tinfo_cart">
                        {
                            temp.map((item, idx) => <HistoryItem key={idx}
                                                                 path={item.image}
                                                                 count={item.count}
                                                                 price={item.price}
                                                                 name={item.productName}
                                                                 status={item.status}
                                                                 day={item.day}/>)
                        }
                        </tbody>
                    </table>
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

export default connect(mapStateToProps)(HistoryOrder);
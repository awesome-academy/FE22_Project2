import React, { Component } from 'react';
import connect from "react-redux/es/connect/connect";
import { loadDataUsers } from "../../../../redux/actions";

const urlCarts = process.env.REACT_APP_CARTS;

class RowItemOrder extends Component {
    constructor(props) {
        super(props);

        this.state = {
            numStatus: 2,
            status: "Đang xử lý",
            total: 0
        }
        this.onAccept = this.onAccept.bind(this);
    }

    componentDidMount() {
        const { carts, idUser } = this.props;
        let myCart = carts.find(ca => ca.idUser === idUser);

        let totalTemp = 0;
        let statusTemp = "";
        let numStatusTemp = 2;
        for (var sum of myCart.itemSelected) {
            if (sum.status === 2) {
                totalTemp += (sum.price*sum.count);
                statusTemp = "Đang chờ xử lý";
                numStatusTemp = 2;
            } else if (sum.status === 3) {
                statusTemp = "Chấp nhận đơn hàng";
                numStatusTemp = 3;
            }
        }

        this.setState({
            numStatus: numStatusTemp,
            status: statusTemp,
            total: totalTemp
        });
    }

    async editCarts(obj) {
        // PUT Data Carts
        await fetch(urlCarts+"/"+obj.id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj)
        });
    }

    onAccept(event) {
        const { item } = this.props;
        for(var selected of item.itemSelected) {
            if (selected.status === 2)
                selected.status = 3;
        }

        this.setState({
            numStatus: 3,
            status: "Chấp nhận đơn hàng"
        });

        this.editCarts(item);
    }

    render() {
        const { id, idUser } = this.props;
        const { total, numStatus, status } = this.state;
        const unAccept = {
            color: "red"
        };
        const Accept = {
            color: "green"
        }

        return (
            <tr>
                <td className="text-center">
                    <div className="table--item content--cart"><span>{id}</span></div>
                </td>
                <td className="text-center">
                    <div className="table--item"><span>{idUser}</span></div>
                </td>
                <td className="text-center">
                    <div className="table--item"><span>{total}đ</span></div>
                </td>
                <td className="text-center">
                    {
                        numStatus === 2 &&
                        <div className="table--item" style={unAccept}><span>{status}</span></div>
                    }
                    {
                        numStatus === 3 &&
                        <div className="table--item" style={Accept}><span>{status}</span></div>
                    }
                </td>
                <td className="text-center">
                    <div className="table--item">
                        <button className="btn btn-warning" onClick={this.onAccept}>Xác nhận</button>
                    </div>
                </td>
            </tr>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.users,
        carts: state.carts
    }
}

function mapDispatchToProps(dispatch) {
    return {
        data: (list) => {
            dispatch(loadDataUsers(list));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RowItemOrder);
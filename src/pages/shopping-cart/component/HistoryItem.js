import React, { Component } from 'react';

class HistoryItem extends Component {
    render() {
        const { path, name, price, count, day, status } = this.props;
        let showStatus = "";
        let unAccept = {color: "red"};
        let accept = {color: "green"};
        if (status === 2) {
            showStatus = "Đang xử lý";
        } else if (status === 3) {
            showStatus = "Đang vận chuyển";
        }

        return (
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
                        <input className="form-control input--value" disabled type="number" value={count} onChange={this.onChange}/>
                    </div>
                </td>
                <td className="text-center">
                    <div className="table--item"><span>{parseInt(count*price)}.000đ</span></div>
                </td>
                <td className="text-center">
                    {
                        status === 2 && <div className="table--item" style={unAccept}><span>{showStatus}</span></div>
                    }
                    {
                        status === 3 && <div className="table--item" style={accept}><span>{showStatus}</span></div>
                    }
                </td>
                <td className="text-center">
                    <div className="table--item"><span>{day}</span></div>
                </td>
            </tr>
        );
    }
}

export default HistoryItem;
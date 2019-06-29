import React, { Component } from 'react';
import connect from "react-redux/es/connect/connect";

const urlProducts = process.env.REACT_APP_PRODUCTS;

class RowItemProduct extends Component {
    constructor(props) {
        super(props);

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.state = {
            toggleCheck: true
        }
    }

    componentDidMount() {
        let { active } = this.props;
        if (typeof (active) === "undefined") active = true;
        this.setState({
            toggleCheck: active
        });
    }

    async edtDataProduct(obj) {
        // POST Data Carts
        await fetch(urlProducts+"/"+obj.id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj)
        });
    }

    onChangeHandler(event) {
        this.setState({
            toggleCheck: !this.state.toggleCheck
        });

        const { product } = this.props;
        let obj = {...product, isActive: !this.state.toggleCheck};
        setTimeout(() => {
            this.edtDataProduct(obj);
        }, 400)
    }

    render() {
        const { productName, price,
            image, decription, idCategory,
            productNameList, decriptionList,
            discount, onEdit } = this.props;

        const active = this.state.toggleCheck;

        return (
            <tr>
                <td className="text-center">
                    <img className="img-fluid" src={require(`../../../../images/HOME/${image}`)} alt="product-bought"/>
                </td>
                <td className="text-center">
                    <div className="table--item content--cart"><span>{productName}</span></div>
                </td>
                <td className="text-center">
                    <div className="table--item"><span>{price}.000đ</span></div>
                </td>
                <td className="text-center">
                    <div className="table--item"><span>{decription}</span></div>
                </td>
                <td className="text-center">
                    <div className="table--item"><span>{productNameList}</span></div>
                </td>
                <td className="text-center">
                    <div className="table--item"><span>{decriptionList}</span></div>
                </td>
                <td className="text-center">
                    <div className="table--item"><span>{discount}</span></div>
                </td>
                <td className="text-center">
                    <div className="table--item"><span>{idCategory}</span></div>
                </td>
                <td className="text-center">
                    <div className="table--item">
                        {
                            active && <input type="checkbox" onChange={this.onChangeHandler} defaultChecked={active}/>
                        }
                        {
                            !active && <input type="checkbox" onChange={this.onChangeHandler} defaultChecked={active}/>
                        }
                    </div>
                </td>
                <td className="text-center">
                    <div className="table--item">
                        <button className="btn btn-warning" onClick={onEdit}>Sửa</button>
                    </div>
                </td>
            </tr>
        );
    }
}

function mapStateToProps(state) {
    return {
        redirectProducts: state.redirectProducts
    }
}

export default connect(mapStateToProps)(RowItemProduct);
import React, { Component } from 'react';
import ItemRowTable from "../sub-component/ItemRowTable";
import RowItemProduct from "./RowItemProduct";
import connect from "react-redux/es/connect/connect";
import {loadData, redirectProducts, updateItemProduct} from "../../../../redux/actions";

class ItemProduct extends Component {
    constructor(props) {
        super(props);

        this.onEdit = this.onEdit.bind(this);
    }

    componentDidMount() {
        const { data } = this.props;
        data();
    }

    onEdit(cate) {
        return (event) => {
            const { update, redirect } = this.props;
            update(cate);
            redirect(3); // Redirect to EditProduct
        }
    }

    render() {
        const { products } = this.props;
        return (
            <ItemRowTable>
                {
                    products.data.map((item, idx) => <RowItemProduct key={idx} productName={item.productName}
                                                                price={item.price}
                                                                image={item.image}
                                                                decription={item.decription}
                                                                idCategory={item.IdCategory}
                                                                productNameList={item.productNameList}
                                                                decriptionList={item.decriptionList}
                                                                product={item}
                                                                discount={item.discount} active={item.isActive}
                                                                onEdit={this.onEdit(item)}/>)
                }
            </ItemRowTable>
        );
    }
}

function mapStateToProps(state) {
    return {
        products: state.products
    }
}

function mapDispatchToProps(dispatch) {
    return {
        data: (list) => {
            dispatch(loadData(list));
        },
        update: (item) => {
            dispatch(updateItemProduct(item));
        },
        redirect: (item) => {
            dispatch(redirectProducts(item));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemProduct);
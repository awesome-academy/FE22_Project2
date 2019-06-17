import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductItem from "./ProductItem";

import { loadData } from '../../../redux/actions';

class ProductList extends Component {
    componentDidMount() {
        const url = process.env.REACT_APP_PRODUCTS;
        const { data } = this.props;
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    data(result);
                },
                (error) => {

                }
            )
    }

    render() {
        const { products } = this.props;
        return(
            <div className="product_list--item">
                {
                    products.map((item, idx) => <ProductItem key={idx}
                                                             id={item.id}
                                                             productName={item.productName}
                                                             decription={item.decription}
                                                             price={item.price}
                                                             productNameList={item.productNameList}
                                                             decriptionList={item.decriptionList}
                                                             path={item.image}/>)
                }
            </div>
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
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);

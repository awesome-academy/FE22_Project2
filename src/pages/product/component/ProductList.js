import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductItem from "./ProductItem";

import { addItemSelected } from '../../../redux/actions';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.onClickAdd = this.onClickAdd.bind(this);
        this.onShowDetail = this.onShowDetail.bind(this);
    }

    onClickAdd(item) {
        return (event) => {
            let day = `${new Date().getDate()}/${new Date().getMonth()+1}/${new Date().getFullYear()}`;
            const { productSelected, add } = this.props;
            let countObject = productSelected;

            if (!countObject) { // First Array Check Count Init
                countObject = [];
                countObject.push({...item, count: 1, status: 1, day})
            }
            else { // Array Check Count exist
                let idx = countObject.findIndex(obj => {return obj.id === item.id && obj.status === 1}); // Get index of element in Array Check Count
                if (idx > -1) // Found element in Array Check Count
                    countObject[idx].count += 1;
                else // Don't Found element in Array Check Count
                    countObject.push({...item, count: 1, status: 1, day})
            }
            localStorage.setItem('id-item--cart', JSON.stringify(countObject)); // Set LocalStorage for Array Check Count
            add(countObject);
        }
    }

    onShowDetail(item) {
        return event => {
            let arrItemRecently = JSON.parse(localStorage.getItem('item-detail'));
            if (!arrItemRecently) arrItemRecently = [];

            if (arrItemRecently.length > 3) {
                arrItemRecently.shift();
            }
            arrItemRecently.push(item);

            localStorage.setItem('item-detail', JSON.stringify(arrItemRecently));
            window.location.href = '/detail';
        }
    }

    render() {
        const { products } = this.props;
        let temp = [];
        
        if (products.length > 0) {
            for(var product of products) {
                if (product.isActive) {
                    temp.push(product);
                }
            }
        } 
        return(
            <div className="product_list--item">
                {
                    temp.map((item, idx) => <ProductItem key={idx}
                                                             productName={item.productName}
                                                             decription={item.decription}
                                                             price={item.price}
                                                             productNameList={item.productNameList}
                                                             decriptionList={item.decriptionList}
                                                             path={item.image}
                                                             onClick={this.onClickAdd(item)}
                                                             onShowDetail={this.onShowDetail(item)}/>)
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        products: state.products,
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);

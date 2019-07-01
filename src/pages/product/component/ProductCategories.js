import React, { Component } from 'react';
import CategoryItem from "./CategoryItem";
import connect from "react-redux/es/connect/connect";

import { loadData } from '../../../redux/actions';

const urlProducts = process.env.REACT_APP_PRODUCTS;

class ProductCategories extends Component {
    constructor(props) {
        super(props);

        this.onChoose = this.onChoose.bind(this);
        this.showAll = this.showAll.bind(this);
    }

    async loadProducts(item) {
        await fetch(urlProducts).then(res => res.json())
            .then(result => {
                this.clickChooseCate(result, item);
            }).catch(err => {
                console.log(err);
            })
    }

    clickChooseCate(products, item) {
        const { data } = this.props;
        let selectedProducts = [];

        if (products.length > 0) {
            for(var product of products) {
                if(product.IdCategory === item.id) {
                    selectedProducts.push(product);
                }
            }
            data(selectedProducts);
        }
    }

    onChoose(item) {
        return event => {
            this.loadProducts(item);
        }
    }

    showAll(event) {
        const { data } = this.props;
        fetch(urlProducts).then(res => res.json())
        .then(result => {
            data(result);
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        const { categories } = this.props;
        let temp = [];
        if (categories.length > 0) {
            for (var category of categories) {
                if (category.isActive) {
                    temp.push(category);
                }
            }
        }

        return (
            <div>
                <div className="product--category">
                    <h5 className="text-uppercase product--title pb-3" onClick={this.showAll}>
                        <i className="fa fa-bars" /> &nbsp; Danh mục sản phẩm
                    </h5>
                    <div id="accordion">
                        {
                            temp.map((item, idx) => <CategoryItem key={idx} onChoose={this.onChoose(item)}
                                                                categoryName={item.nameCategory} />)
                        }
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        products: state.products,
        categories: state.categories
    }
}

function mapDispatchToProps(dispatch) {
    return {
        data: (list) => {
            dispatch(loadData(list));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCategories);
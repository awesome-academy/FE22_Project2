import React, { Component } from 'react';
import CategoryItem from "./CategoryItem";
import connect from "react-redux/es/connect/connect";

class ProductCategories extends Component {
    render() {
        const { categories } = this.props;
        return (
            <div>
                <div className="product--category">
                    <h5 className="text-uppercase product--title pb-3"><i className="fa fa-bars" /> &nbsp; Danh mục sản phẩm</h5>
                    <div id="accordion">
                        {
                            categories.map((item, idx) => <CategoryItem key={idx} categoryName={item.nameCategory} />)
                        }
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        categories: state.categories
    }
}

export default connect(mapStateToProps)(ProductCategories);
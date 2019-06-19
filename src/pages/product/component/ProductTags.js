import React, { Component } from 'react';
import connect from "react-redux/es/connect/connect";
import TagItem from "../../home/component/subComponent/TagItem";

class ProductTags extends Component {
    render() {
        const { categories } = this.props;
        return (
            <div className="product--tag mt-5">
                <h5 className="text-uppercase product--title pb-3">Tag sản phẩm</h5>
                <div className="product_item--tag mt-5">
                    {
                        categories.map((item, idx) => <TagItem key={idx} nameTag={item.nameCategory} />)
                    }
                </div>
            </div>
        );
    }
}function mapStateToProps(state) {
    return {
        categories: state.categories
    }
}

export default connect(mapStateToProps)(ProductTags);
import React, { Component } from 'react';

import imgLine from '../../../../images/HOME/line.png';
import TagItem from "./TagItem";
import connect from "react-redux/es/connect/connect";

class ProductTag extends Component {
    render() {
        const { categories } = this.props;
        return (
            <div className="product--tag pb-5 pb-sm-0">
                <h5 className="text-uppercase text-center title--content">Tag sản phẩm</h5>
                <div className="line--img mb-5 mt-4">
                    <img className="img-fluid" src={imgLine} alt="line" />
                </div>
                <div className="product_item--tag">
                    {
                        categories.map((item, idx) => <TagItem key={idx} nameTag={item.nameCategory} />)
                    }
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

export default connect(mapStateToProps)(ProductTag);
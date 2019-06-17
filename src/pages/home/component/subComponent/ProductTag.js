import React, { Component } from 'react';

import imgLine from '../../../../images/HOME/line.png';
import TagItem from "./TagItem";

class ProductTag extends Component {
    render() {
        return (
            <div className="product--tag pb-5 pb-sm-0">
                <h5 className="text-uppercase text-center title--content">Tag sản phẩm</h5>
                <div className="line--img mb-5 mt-4"><img className="img-fluid" src={imgLine} alt="line" /></div>
                <div className="product_item--tag">
                    <TagItem nameTag="Đồng hồ" />
                    <TagItem nameTag="Đồng hồ" />
                    <TagItem nameTag="Đồng hồ" />
                    <TagItem nameTag="Đồng hồ" />
                    <TagItem nameTag="Đồng hồ" />
                    <TagItem nameTag="Đồng hồ" />
                </div>
            </div>
        );
    }
}

export default ProductTag;
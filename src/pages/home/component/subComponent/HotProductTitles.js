import React, { Component } from 'react'

import imgLine from '../../../../images/HOME/line.png';
import connect from "react-redux/es/connect/connect";

class HotProductTitles extends Component {
    render() {
        const { categories } = this.props;
        return (
            <section className="product--hot pt-4 pb-4">
                <div className="info--select text-md-center">
                    <h5>Sản phẩm mới</h5>
                    <h4>Sản phẩm bán chạy</h4>
                    <h5>Sản phẩm đặc biệt</h5>
                </div>
                <div className="line--img mt-2"><img className="img-fluid" src={imgLine} alt="Line"/>
                </div>
                <div className="product--choice mt-3">
                    <div className="product_item--choice--1">
                        <ul className="tag-product">
                            {
                                categories.slice(0, 3).map((item, idx) =>
                                    <li><a key={idx} href="#">{item.nameCategory}</a></li>)
                            }
                        </ul>
                    </div>
                    <div className="product_item--choice--1 pl-md-3">
                        <ul className="tag-product">
                            {
                                categories.slice(3, categories.length).map((item, idx) =>
                                    <li><a key={idx} href="#">{item.nameCategory}</a></li>)
                            }
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}

function mapStateToProps(state) {
    return {
        categories: state.categories
    }
}

export default connect(mapStateToProps)(HotProductTitles);
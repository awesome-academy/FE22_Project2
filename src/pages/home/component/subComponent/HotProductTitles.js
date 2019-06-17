import React, { Component } from 'react'

import imgLine from '../../../../images/HOME/line.png';

class HotProductTitles extends Component {
    render() {
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
                            <li><a href="#">Mỹ phẩm</a></li>
                            <li><a href="#">Chăm sóc da</a></li>
                            <li><a href="#">Dành cho tóc</a></li>
                        </ul>
                    </div>
                    <div className="product_item--choice--1 pl-md-3">
                        <ul className="tag-product">
                            <li><a href="#">Nước Hoa</a></li>
                            <li><a href="#">Trang sức</a></li>
                            <li className="mr-sm-5" id="last-child"><a href="#">Quà tặng</a></li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}

export default HotProductTitles;
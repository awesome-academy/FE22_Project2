import React, { Component } from 'react';
import { Link } from "react-router-dom";

import InfoItemTag from "./sub-component/InfoItemTag";

class TagDetail extends Component {
    render() {
        return (
            <div className="detail_tab pb-5 col-lg-8 col-12">
                <ul className="nav nav-pills" role="tablist">
                    <li className="nav-item">
                        <Link className="nav-link active pr-2 text-uppercase"
                           data-toggle="pill" to="#home">Đặc điểm nổi bật</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active pr-2 text-uppercase"
                           data-toggle="pill" to="#abc">Thông tin sản phẩm</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active pr-2 text-uppercase"
                           data-toggle="pill" to="#home">Đánh giá</Link>
                    </li>
                </ul>
                {/* Tab panes*/}
                <div className="tab-content mt-5">
                    <div className="container tab-pane active p-0" id="home"><br />
                        <InfoItemTag path="product_info--img--1.jpg" />
                        <InfoItemTag path="product_info--img--2.jpg" />
                        <InfoItemTag path="product_info--img--3.png" />
                        <InfoItemTag path="product_info--img--4.jpg" />
                    </div>

                    <div className="container tab-pane p-0" id="abc"><br />
                        asb
                    </div>
                </div>
            </div>
        );
    }
}

export default TagDetail;
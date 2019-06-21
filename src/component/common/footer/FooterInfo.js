import React, { Component } from 'react';
import { Link } from "react-router-dom";

class FooterInfo extends Component {
    render() {
        return (
            <div className="overview--item pb-4 pt-4">
                <h5 className="pb-4">Chuyển hàng</h5>
                <ul className="pl-0">
                    <li><Link to="/">Mua sắm trực tuyến</Link></li>
                    <li><Link to="/">Đến từ chúng tôi gữi đến</Link></li>
                    <li><Link to="/">Chính sách vận chuyển</Link></li>
                    <li><Link to="/">Vận chuyển thông tin</Link></li>
                </ul>
            </div>
        );
    }
}

export default FooterInfo;
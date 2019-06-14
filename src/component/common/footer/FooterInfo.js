import React, { Component } from 'react';

class FooterInfo extends Component {
    render() {
        return (
            <div className="overview--item pb-4 pt-4">
                <h5 className="pb-4">Chuyển hàng</h5>
                <ul className="pl-0">
                    <li><a href="#">Mua sắm trực tuyến</a></li>
                    <li><a href="#">Đến từ chúng tôi gữi đến</a></li>
                    <li><a href="#">Chính sách vận chuyển</a></li>
                    <li><a href="#">Vận chuyển thông tin</a></li>
                </ul>
            </div>
        );
    }
}

export default FooterInfo;
import React, { Component } from 'react';
import { Link } from "react-router-dom";

import imgLine from '../../../../images/HOME/line.png';
import imgLogo from '../../../../images/HOME/logo.png';

class AboutUs extends Component {
    render() {
        return (
            <div className="about-us pt-5 pb-5 pt-sm-0 pb-sm-0">
                <h5 className="text-uppercase text-center title--content">Về chúng tôi</h5>
                <div className="line--img mb-4 mt-4">
                    <img className="img-fluid" src={imgLine} alt="line" />
                </div>
                <img className="float-left" src={imgLogo} alt="logo" />
                <h6 className="text-uppercase pt-4 pb-3 title--content">Giới thiệu chung về mỹ phẩm Handmade Mandala</h6>
                <p className="body--content">
                    Hi, chào các nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ quay lại hâm nóng
                    cái Blog này vào một ngày đầu hè nóng oi bức, khi mà dân tình xô nhau đi tắm
                    Free để giải nhiệt.Hi, chào các nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ quay lại hâm nóng
                    cái Blog này vào một ngày đầu hè nóng oi bức, khi mà dân tình xô nhau đi tắm
                    Free để giải nhiệt.Hi, chào các nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ quay lại hâm nóng
                    cái Blog này vào một ngày đầu hè nóng oi bức, khi mà dân tình xô nhau đi tắm
                    Free để giải nhiệt.
                </p>
                <Link className="link--content" to="/">Xem thêm</Link>
            </div>
        );
    }
}

export default AboutUs;
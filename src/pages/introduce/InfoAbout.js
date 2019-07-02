import React, { Component } from 'react';
import { Link } from "react-router-dom";

class InfoAbout extends Component {
    render() {
        return(
            <div class="about-us mt-4 mb-5">
            <h3 class="text-uppercase">Về chúng tôi</h3>
            <div class="about--info row">
                <div class="col-lg-6 img-thumbnail mb-4">
                    <img class="img-fluid" src={require("../../images/AboutUs/about--img.jpg")} alt="hinh chinh"/>
                </div>
                <div class="col-lg-6"><img src={require("../../images/HOME/logo.png")} alt="hinh logo"/>
                <h6 class="mt-4 mb-3 text-uppercase">Giới thiệu chung về mỹ phẫm Handmade Mandala</h6>
                <p>
                    Hi, chào các nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ quay lại hâm nóng cái Blog này&nbsp;vào một ngày đầu hè nóng oi bức, khi mà dân tình xô nhau đi tắm Free để giải nhiệt.
                    Hi, chào các nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ quay lại hâm nóng cái Blog này
                    vào một ngày đầu hè nóng oi bức, khi mà dân tình xô nhau đi tắm Free để giải nhiệt. Sau khá nhiều lời hứa
                    hão thì hôm nay tớ quay lại hâm nóng cái Blog này vào một ngày đầu hè nóng oi bức, khi mà dân tình xô nhau đi tăm Free
                    để giải nhiệt.
                </p><Link to="#">Xem thêm</Link>
                </div>
            </div>
            </div>
        );
    }
}

export default InfoAbout;
import React, { Component } from 'react';

import imgLine from '../../../../images/HOME/line.png';
import imgBlog from '../../../../images/Blog/blog_item--img2.png';

class Blog extends Component {
    render() {
        return (
            <div className="blog pb-5 pb-sm-0">
                <h5 className="text-uppercase text-center title--content">blog</h5>
                <div className="line--img mb-4 mt-4"><img className="img-fluid" src={imgLine} alt="line" /></div>
                <div className="img-thumbnail"><img className="img-fluid w-100" src={imgBlog} alt="Blog Image" /></div>
                <div className="blog--content">
                    <h6 className="text-uppercase title--content">Review son kem Bourjois velvet</h6>
                    <hr />
                    <p>
                        Hi, chào các nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ quay lại hăm
                        nóng cái Blog này vào một ngày đầu hè nóng oi bức, khi mà dân tình xô nhau đi tắm
                        Free để giải nhiệt.
                    </p><a className="link--content" href="#"><i>Bởi NamTran (27/05/2015)</i></a>
                    <hr /><a className="link--content" href="#">Đọc thêm<i className="fas fa-angle-right" /></a><a className="link--content float-right" href="#">23 Bình luận</a>
                </div>
            </div>
        );
    }
}

export default Blog;
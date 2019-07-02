import React, { Component } from 'react';
import { Link } from "react-router-dom";

class ItemInfoBlog extends Component {
    render() {
        return(
            <div className="blog--content page_blog--content mt-5">
                <div className="blog pb-5 pb-sm-0">
                    <div className="img-thumbnail p-0">
                        <img className="img-fluid w-100" src={require("../../images/Blog/blog_item--img1.png")} alt="Blog"/>
                    </div>
                    <div className="blog--content">
                        <h6 className="text-uppercase title--content mt-3">Review son kem Bourjois velvet</h6>
                        <hr/>
                        <p>
                        Hi, chào các nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ quay lại hăm
                        nóng cái Blog này vào một ngày đầu hè nóng oi bức, khi mà dân tình xô nhau đi tắm
                        Free để giải nhiệt.
                        </p>
                        <Link className="link--content" to="#"><i>Bởi NamTran (27/05/2015)</i></Link>
                        <hr/>
                        <Link className="link--content" to="#">Đọc thêm
                            <i class="fas fa-angle-right"/>
                        </Link>
                        <Link className="link--content float-right" to="#">23 Bình luận</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemInfoBlog;
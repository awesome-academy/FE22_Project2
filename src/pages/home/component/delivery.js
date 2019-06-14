import React, { Component } from 'react';
import ImgPlane from '../../../images/HOME/plane.png'
import ImgGift from '../../../images/HOME/gift.png'
import ImgStar from '../../../images/HOME/star.png'

export default class delivery extends Component {
    render() {
        return (
            <div >
                <div className="row" id="body--content">
                    <div className="col-md-4 pt-sm-4 pt-4 text-center box_info"><img src={ImgPlane} alt="" />
                        <p>Miễn Phí vận chuyển</p>
                    </div>
                    <div className="col-md-4 pt-sm-4 pt-4 text-center box_info"><img src={ImgGift} alt="" />
                        <p>Nhận ngay quà tặng trị giá 350.000đ</p>
                    </div>
                    <div className="col-md-4 pt-sm-4 pt-4 text-center box_info"><img src={ImgStar} alt="" />
                        <p>Giảm 30% cho đơn hàng trên 5.000.000đ</p>
                    </div>
                </div>
            </div>
        )
    }
}

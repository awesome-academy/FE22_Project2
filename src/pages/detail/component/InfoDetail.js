import React, { Component } from 'react';

import imgHeart from '../../../images/HOME/heart.png';
import imgReload from '../../../images/HOME/reload.png';

class InfoDetail extends Component {
    render() {
        return (
            <div className="detail_info mt-5 mb-5 mt-lg-0 mb-lg-0 col-lg-6 col-12">
                <div className="product--info--list">
                    <h3 className="pb-2 pb-lg-1 text-uppercase">Lắc tay tyffany xu hướng mới nhất</h3>
                    <span className="text-uppercase">tyffany ms 3201</span>
                    <div className="product--price mb-3 mt-3 mb-lg-2 mt-lg-2">
                        <span>955.000đ &nbsp;</span><span>999.000đ</span>
                    </div>
                    <div className="rating--like">
                        <p className="pt-2 pt-lg-2">
                            Không thể phủ nhận, thời trang và phong cách chính là "tuyên ngôn" không lời mạnh mẽ nhất của mỗi người phụ nữ.
                            Do đó, việc mua sắm thời trang trở thành niềm vui, và có khi là nguồn cảm hứng vô tận để phái đẹp
                            sống vui, sống đẹp hơn trong mất nửa còn lại của thế giới. Để F5 tủ đồ của mình trước những xu hướng
                            ngày một đa dạn hơn trong thế giới thời trang, nhiều chị em không ngần ngại chi tiêu "mạnh tay" để sở hữu những món đồ yêu thích.
                        </p>
                        <span className="text-uppercase">Màu sắc</span>
                        <select className="w-100 p-2 mt-3 mb-3 mt-lg-2 mb-lg-2 form-control" name="color">
                            <option value>Màu Bạc</option>
                            <option value>Màu Vàng</option>
                        </select>
                        <span className="text-uppercase">Size</span>
                        <select className="w-100 p-2 mt-3 mb-3 mt-lg-2 mb-lg-2 form-control" name="size">
                            <option value>12</option>
                            <option value>13</option>
                        </select>
                        <div className="product--btn--buy pb-3 mt-3 pb-lg-0 mb-lg-4 mt-lg-4">
                            <button className="btn btn-custom text-uppercase">Mua hàng</button>
                            <button className="btn btn-custom ml-1"><img src={imgHeart} alt="heart" /></button>
                            <button className="btn btn-custom ml-1"><img src={imgReload} alt="reload" /></button>
                        </div>
                        <span className="ship">Shipping &amp; &nbsp;<span>Returns</span></span>
                        <br />
                        <img className="mt-3 mt-lg-2"
                             src={require("../../../images/Detail/product--connect.jpg")} alt="img connect" />
                    </div>
                </div>
            </div>
        );
    }
}

export default InfoDetail;
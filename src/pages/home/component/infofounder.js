import React, { Component } from 'react';
import ImgFeedback2 from '../../../images/HOME/feedback_2--img.png'
import ImgFeedback1 from '../../../images/HOME/feedback_1--img.png'

class infofounder extends Component {
    render() {
        return (
            <section className="pt-md-4 pb-md-5" id="feedback">
                <div className="carousel slide" id="demo" data-ride="carousel">
                    {/* Indicators*/}
                    <ul className="carousel-indicators">
                        <li className="true" data-target="#demo" data-slide-to={0} />
                        <li data-target="#demo" data-slide-to={1} className="active" />
                    </ul>
                    {/* The slideshow*/}
                    <div className="carousel-inner">
                        <div className="carousel-item">
                            <div className="feedback--bg pb-lg-5 pb-3">
                                <p className="text-center text-md-left ml-md-2 mb-5">
                                    "Vẫn là vẻ bề ngoài vô cùng đơn giản với các tông màu trắng, hồng làm chủ
                                    đạo nhưng lại tạo ra sức hút kỳ lạ với những ai cầm trên tay sản phẩm ấy! Với
                                    công nghệ cải tiến mới nhất, hảng Rohto"
          </p>
                                <div className="feedback_info"><img className="mr-4 mr-md-0 img-fluid" src={ImgFeedback1} alt="" />
                                    <div className="title">
                                        <h6 className="text-uppercase pr-lg-1">Tutile</h6><span>&nbsp;_&nbsp;</span><i>Giảm đốc phát trển sản phẩm</i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item active">
                            <div className="feedback--bg pb-lg-5 pb-3">
                                <p className="text-center text-md-left ml-md-2 mb-5">
                                    "Vẫn là vẻ bề ngoài vô cùng đơn giản với các tông màu trắng, hồng làm chủ
                                    đạo nhưng lại tạo ra sức hút kỳ lạ với những ai cầm trên tay sản phẩm ấy! Với
                                    công nghệ cải tiến mới nhất, hảng Rohto"
          </p>
                                <div className="feedback_info"><img className="mr-4 mr-md-0 img-fluid" src={ImgFeedback2} alt="" />
                                    <div className="title">
                                        <h6 className="text-uppercase pr-lg-1">Tutile</h6><span>&nbsp;_&nbsp;</span><i>Giảm đốc phát trển sản phẩm</i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default infofounder;
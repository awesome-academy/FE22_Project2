import React, { Component } from 'react';

import imgLine from '../../../../images/HOME/line.png';

class SendMail extends Component {
    render() {
        return (
            <div className="send-email pb-5 pb-sm-0">
                <h5 className="text-uppercase text-center title--content">Gửi email cho chúng tôi</h5>
                <div className="line--img mb-5 mt-4"><img className="img-fluid" src={imgLine} alt="line" /></div>
                <form action="#">
                    <input className="w-100 pl-3 pt-2 pb-2 mb-3" type="text" placeholder="Email của bạn" /><span className="text-center mb-3">Gủi email để nhận những ưu đãi mới nhất</span>
                    <div className="form--btn w-100">
                        <button className="text-uppercase btn btn-dark mb-3">Giỏ hàng</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SendMail;
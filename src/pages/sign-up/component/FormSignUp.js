import React, { Component } from 'react';

import imgReply from '../../../images/reply.jpg';

class FormSignUp extends Component{
    render() {
        return(

            <div className="form--signup mt-4 mb-5">
                <h3 className="text-uppercase">Đăng ký</h3>
                <form className="mt-4 p-5">
                    <h5 className="text-uppercase">Thông tin cá nhân</h5>
                    <div className="form-group">
                        <label htmlFor="firstName">Họ lót *</label>
                        <input className="form-control" id="firstName" type="text" required="required"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Tên *</label>
                        <input className="form-control" id="lastName" type="text" required="required"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email *</label>
                        <input className="form-control" id="email" type="email" required="required"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="passWord">Password *</label>
                        <input className="form-control" id="passWord" type="password" required="required"/>
                    </div>
                    <div className="form-check">
                        <label className="form-check-label">
                            <input className="form-check-input" type="checkbox"/> Đăng ký nhận bản tin
                        </label>
                    </div>
                    <h5 className="text-uppercase mt-5">Thông tin đăng nhập</h5>
                    <div className="form-group">
                        <label htmlFor="mk">Mật khẩu *</label>
                        <input className="form-control" id="mk" type="password" required="required"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmMK">Xác nhận mật khẩu *</label>
                        <input className="form-control" id="confirmMK" type="password" required="required"/>
                    </div>
                    <div className="button--sign-up">
                        <div className="btn btn-dark">Gữi</div>
                        <div className="btn btn-dark"><img src={imgReply}/>&nbsp;Quay lại</div>
                    </div>
                </form>
            </div>
        );
    }
}

export default FormSignUp;
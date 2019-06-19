import React, { Component } from 'react';

class FormSignIn extends Component{
    render() {
        return(
            <div className="form--signup mt-4 mb-5">
                <div className="sign-in--header">
                    <h3 className="text-uppercase">Đăng Nhập</h3>
                    <button className="btn btn-dark btn_sign-in text-uppercase">Đăng ký</button>
                </div>
                <form className="mt-4 p-5">
                    <h5 className="text-uppercase mb-3">Khách hàng Đăng ký</h5><span>Nếu bạn có một tài khoản, xin vui lòng đăng nhập</span>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="form-group mt-5">
                                <label htmlFor="email_sign-in">Địa chỉ email *</label>
                                <input className="form-control" id="email_sign-in" type="email" required="required" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password_sign-in">Password *</label>
                                <input className="form-control" id="password_sign-in" type="password" required="required" />
                            </div><a className="sign-in_forget--password text-capitalize mr-5" href="#">Quên Mật Khẩu?</a>
                            <button className="btn btn-dark btn_sign-in text-uppercase mt-3 mt-sm-0">Đăng nhập</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default FormSignIn;
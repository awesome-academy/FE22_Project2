import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Facebook from "../../../Facebook/Facebook";

class Login extends Component {
    render() {
        return (
            <div className="dropdown-menu w-100">
                <div className="cart_item">
                    <div className="cart_item--sub">
                        <Link to="/sign-in"><button className="btn btn-success text-uppercase w-100">đăng nhập</button></Link>
                        <Link to="/sign-up"><button className="btn btn-success text-uppercase w-100 mt-2">đăng ký</button></Link>
                    </div>
                    <hr />
                    <div className="signin--socialnetwork">
                        <Facebook>
                            <i className="fab fa-facebook-f mr-3"></i>
                            Đăng nhập bằng Facebook
                        </Facebook>

                        <button className="btn mt-2 w-100">
                            <i className="fab fa-google-plus-g mr-3"></i>
                            Đăng nhập bằng Gmail
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Logon extends Component {
    constructor(props) {
        super(props);
        this.handlerLogon = this.handlerLogon.bind(this);
    }

    handlerLogon(event) {
        localStorage.removeItem("logon");
        window.location.reload();
    }

    render() {
        const { name } = this.props;
        return (
            <div className="dropdown-menu menu-logon w-100">
                <div className="cart_item accout--logon">
                    <Link className="mb-2" to="/shopping-cart"><i className="far fa-eye"></i>&nbsp; Xin chào, {name}</Link>
                    <hr/>
                    <Link to="/shopping-cart"><i className="far fa-user"></i>&nbsp; Tài khoản của tôi</Link>
                    <Link to="/" onClick={this.handlerLogon}><i className="fas fa-sign-out-alt"></i>&nbsp; Đăng xuất</Link>
                </div>
            </div>
        );
    }
}

export default Logon;
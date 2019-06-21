import React, { Component } from 'react';
import { Link } from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import {loadDataCarts, loadDataUsers} from "../../../redux/actions";

const urlUsers = process.env.REACT_APP_USERS;
const urlCarts = process.env.REACT_APP_CARTS;

class FormSignIn extends Component{
    constructor(props) {
        super(props);
        this.email = React.createRef();
        this.pass = React.createRef();
        this.SubmitHandler = this.SubmitHandler.bind(this);
    }

    SubmitHandler(event) {
        const email = this.email.current.value;
        const pass = this.pass.current.value;
        this.notifycationLogin(email, pass);
    }

    notifycationLogin(email, pass) {
        const { users, carts } = this.props;
        let cloneCarts = carts;

        let idxEmail = users.findIndex((us) => us.email === email); // Find email
        let idxPass = users.findIndex(us => us.password === pass); // Find password

        if (idxEmail <= -1) alert("Email không tồn tại !!");
        else {
            if (idxPass <= -1) alert("Mật khẩu không đúng !!!");
            else {
                const user = users.find((us) => us.email === email);
                alert("Đăng nhập thành công !!!");
                localStorage.setItem("logon", JSON.stringify({id: user.id, check: true}));

                const cart = cloneCarts.find(c => c.idUser === user.id);
                if (cart)
                    localStorage.setItem("id-item--cart", JSON.stringify(cart.itemSelected));
            }
        }
    }

    componentDidMount() {
        // Fetch Data Users from API
        const { data } = this.props;
        fetch(urlUsers)
            .then(res => res.json())
            .then(
                (result) => {
                    data(result);
                },
                (error) => {
                    console.log(error);
                }
            );

        // Fetch Data Carts from API
        const { dataCart } = this.props;
        fetch(urlCarts)
            .then(res => res.json())
            .then(
                (result) => {
                    dataCart(result);
                },
                (error) => {
                    console.log(error);
                }
            );
    }

    render() {
        return(
            <form className="form--signup mt-4 mb-5" action="/">
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
                                <input className="form-control" id="email_sign-in" ref={this.email} type="email" required="required" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password_sign-in">Password *</label>
                                <input className="form-control" id="password_sign-in" ref={this.pass} type="password" required="required" />
                            </div>
                            <Link className="sign-in_forget--password text-capitalize mr-5" to="/sign-in">Quên Mật Khẩu?</Link>
                            <button className="btn btn-dark btn_sign-in text-uppercase mt-3 mt-sm-0" onClick={this.SubmitHandler}>Đăng nhập</button>
                        </div>
                    </div>
                </form>
            </form>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.users,
        carts: state.carts
    }
}

function mapDispatchToProps(dispatch) {
    return {
        data: (list) => {
            dispatch(loadDataUsers(list));
        },
        dataCart: (list) => {
            dispatch(loadDataCarts(list));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(FormSignIn);
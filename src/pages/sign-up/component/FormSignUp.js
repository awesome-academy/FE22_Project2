import React, { Component } from 'react';

import imgReply from '../../../images/reply.jpg';
import connect from "react-redux/es/connect/connect";
import {loadDataUsers} from "../../../redux/actions";

const urlUsers = process.env.REACT_APP_USERS;

class FormSignUp extends Component{
    constructor(props) {
        super(props);
        this.createRefComponent();
        this.SubmitHandler = this.SubmitHandler.bind(this);
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
    }

    createRefComponent() {
        this.firstName = React.createRef();
        this.lastName = React.createRef();
        this.email = React.createRef();
        this.pass = React.createRef();
        this.passConfirm = React.createRef();
    }

    SubmitHandler(event) {
        const { users } = this.props;
        const firstName = this.firstName.current.value;
        const lastName = this.lastName.current.value;
        const email = this.email.current.value;
        const password = this.pass.current.value;
        const passConfirm = this.passConfirm.current.value;

        if (this.checkPassword(password, passConfirm)) {
            let id = 1;
            if (users) {
                id = users[users.length - 1].id + 1;
            }

            if (!firstName || !lastName || !email || !password || !passConfirm) {
                alert("Enter your infomation !!");
            } else {
                const obj = {id, firstName, lastName, email, password, role: 2};
                this.pushSignIn(obj);
                alert("Sign Up Success !!");
            }
        } else {
            alert("Password incorrect !!");
        }
    }

    checkPassword(pass, rePass) {
        if (pass === rePass) return true;
        return false;
    }

    async pushSignIn(obj) {
        // POST register
        await fetch(urlUsers, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj)
        });
    }

    render() {
        return(
            <div className="form--signup mt-4 mb-5">
                <h3 className="text-uppercase">Đăng ký</h3>
                <form className="mt-4 p-5">
                    <h5 className="text-uppercase">Thông tin cá nhân</h5>
                    <div className="form-group">
                        <label htmlFor="firstName">Họ lót *</label>
                        <input className="form-control"
                               id="firstName"
                               type="text"
                               ref={this.firstName}
                               required="required"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Tên *</label>
                        <input className="form-control"
                               id="lastName"
                               type="text"
                               ref={this.lastName}
                               required="required"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email *</label>
                        <input className="form-control"
                               id="email"
                               type="email"
                               ref={this.email}
                               required="required"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="passWord">Password *</label>
                        <input className="form-control"
                               id="passWord"
                               type="password"
                               ref={this.pass}
                               required="required"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmMK">Xác nhận mật khẩu *</label>
                        <input className="form-control"
                               id="confirmMK"
                               type="password"
                               ref={this.passConfirm}
                               required="required"/>
                    </div>
                    <div className="form-check">
                        <label className="form-check-label">
                            <input className="form-check-input"
                                   type="checkbox"/> Đăng ký nhận bản tin
                        </label>
                    </div>
                    <div className="button--sign-up mt-4">
                        <button className="btn btn-dark" onClick={this.SubmitHandler}>Gữi</button>
                        <button className="btn btn-dark"><img src={imgReply} alt="icon reply"/>&nbsp;Quay lại</button>
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.users,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        data: (list) => {
            dispatch(loadDataUsers(list));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(FormSignUp);
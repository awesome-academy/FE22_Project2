import React, { Component } from 'react';
import { connect } from "react-redux";

import { loadDataUsers } from "../../redux/actions";

const urlUsers = process.env.REACT_APP_USERS;

class Login extends Component {
    constructor(props) {
        super(props);

        this.userName = React.createRef();
        this.password = React.createRef();

        this.onSubmitHandler = this.onSubmitHandler.bind(this);
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

    onSubmitHandler(event) {
        const userName = this.userName.current.value;
        const password = this.password.current.value;

        this.loginHandler(userName, password);
    }

    loginHandler(email, pass) {
        const { users } = this.props;
        let tempUsers = [];
        for(var user of users) {
            if(user.isActive) {
                if (user.role === 1)
                    tempUsers.push(user);
            }
        }

        let idxEmail = tempUsers.findIndex((us) => us.email === email); // Find email
        let idxPass = tempUsers.findIndex(us => us.password === pass); // Find password

        if (idxEmail <= -1) alert("Email không tồn tại !!");
        else {
            if (idxPass <= -1) alert("Mật khẩu không đúng !!!");
            else {
                const user = tempUsers.find((us) => us.email === email);
                alert("Đăng nhập thành công !!!");
                localStorage.setItem("admin", JSON.stringify({id: user.id, check: true}));
                window.location.href = "/dashboard";
            }
        }
    }

    render() {
        return (
            <div className="container--wrap">
                <div className="wrap">
                    <div className="login--admin">
                        <span>Sign In</span>
                    </div>
                    <div className="login--form">
                        <div className="wrap--input" data-validate="Email is required">
                            <span className="label--input">Username</span>
                            <input type="text" name="username" ref={this.userName}
                             placeholder="Enter email" required/>
                        </div>
                        <div className="wrap--input" data-validate="Password is required">
                            <span className="label--input">Password</span>
                            <input type="password" name="pass" ref={this.password}
                            placeholder="Enter password" required/>
                        </div>
                        <div className="login_form--btn">
                            <button className="btn--login" onClick={this.onSubmitHandler}>
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

function mapDispatchToProps(dispatch) {
    return {
        data: (list) => {
            dispatch(loadDataUsers(list));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
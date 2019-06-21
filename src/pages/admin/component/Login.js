import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div className="container--wrap">
                <div className="wrap">
                    <div className="login--admin">
                        <span>Sign In</span>
                    </div>
                    <form className="login--form">
                        <div className="wrap--input" data-validate="Username is required">
                            <span className="label--input">Username</span>
                            <input type="text" name="username" placeholder="Enter username" />
                        </div>
                        <div className="wrap--input" data-validate="Password is required">
                            <span className="label--input">Password</span>
                            <input type="password" name="pass" placeholder="Enter password" />
                        </div>
                        <div className="login_form--btn">
                            <button className="btn--login">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;
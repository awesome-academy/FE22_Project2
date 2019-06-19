import React, { Component } from 'react';
import Nav from "../../component/common/nav/Nav";
import FormSignIn from "./component/FormSignIn";

class SignIn extends Component {
    render() {
        return(
            <div className="signin--layout">
                <Nav />
                <div className="container mt-3">
                    <FormSignIn/>
                </div>
            </div>
        );
    }
}

export default SignIn;
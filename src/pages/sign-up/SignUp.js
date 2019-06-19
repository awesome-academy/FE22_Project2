import React, { Component } from 'react';
import Nav from "../../component/common/nav/Nav";
import FormSignUp from "./component/FormSignUp";

class SignUp extends Component{
    render() {
        return(
            <div className="signin--layout">
                <Nav />
                <div className="container mt-3">
                    <FormSignUp/>
                </div>
            </div>
        );
    }
}

export default SignUp;
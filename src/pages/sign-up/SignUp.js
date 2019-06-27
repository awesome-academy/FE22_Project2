import React, { Component } from 'react';
import Nav from "../../component/common/nav/Nav";
import FormSignUp from "./component/FormSignUp";
import NotFound from "../../component/common/NotFound";
import Footer from "../../component/common/footer/Footer";

class SignUp extends Component{
    render() {
        const logon = JSON.parse(localStorage.getItem('logon'));
        const access = JSON.parse(localStorage.getItem('access'));
        if (!logon && !access) {
            return(
                <div className="signup_page">
                    <Nav />
                    <div className="container mt-3">
                        <FormSignUp/>
                    </div>
                    <Footer/>
                </div>
            );
        } else {
            return (<div><NotFound/></div>);
        }
    }
}

export default SignUp;
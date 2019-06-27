import React, { Component } from 'react';
import Nav from "../../component/common/nav/Nav";
import FormSignIn from "./component/FormSignIn";
import NotFound from "../../component/common/NotFound";
import Footer from "../../component/common/footer/Footer";

class SignIn extends Component {
    render() {
        const logon = JSON.parse(localStorage.getItem('logon'));
        const access = JSON.parse(localStorage.getItem('access'));
        if (!logon && !access) {
            return(
                <div className="signin_page">
                    <Nav />
                    <div className="container mt-3">
                        <FormSignIn/>
                    </div>
                    <Footer/>
                </div>
            );
        } else {
            return(<div><NotFound/></div>);
        }
    }
}

export default SignIn;
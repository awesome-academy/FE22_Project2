import React, { Component } from 'react';
import Nav from "../../component/common/nav/Nav";
import FormSignUp from "./component/FormSignUp";
import NotFound from "../../component/common/NotFound";

class SignUp extends Component{
    render() {
        const logon = JSON.parse(localStorage.getItem('logon'));
        const access = JSON.parse(localStorage.getItem('access'));
        if (!logon && !access) {
            return(
                <div className="signin--layout">
                    <Nav />
                    <div className="container mt-3">
                        <FormSignUp/>
                    </div>
                </div>
            );
        } else {
            return (<div><NotFound/></div>);
        }
    }
}

export default SignUp;
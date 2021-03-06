import React, { Component } from 'react';
import NavAdmin from "./NavAdmin";
import SideBar from "./SideBar";
import FooterAdmin from "./FooterAdmin";

class LayoutAdmin extends Component {
    render() {
        const checkLoginAdmin = JSON.parse(localStorage.getItem("admin"));
        let check = !checkLoginAdmin ? false : true;

        if(check) {
            return (
                <div className="admin--page">
                    <NavAdmin/>
    
                    <div className="wrap--admin">
                        <SideBar/>
    
                        <div className="wrap--content">
                            <div className="container-fluid mt-4">
                                {this.props.children}
                            </div>
    
                            <FooterAdmin/>
                        </div>
                    </div>
                </div>
            );
        } else {
            window.location.href = "/admin";
        }        
    }
}

export default LayoutAdmin;
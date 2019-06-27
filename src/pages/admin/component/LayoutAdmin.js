import React, { Component } from 'react';
import NavAdmin from "./NavAdmin";
import SideBar from "./SideBar";
import FooterAdmin from "./FooterAdmin";

class LayoutAdmin extends Component {
    render() {
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
    }
}

export default LayoutAdmin;
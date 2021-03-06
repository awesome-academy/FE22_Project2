import React, { Component } from 'react';
import Nav from "../../component/common/nav/Nav";
import Breadcrumb from "../../component/common/tiltleAddress/Breadcrumb";
import Cart from "./component/Cart";
import AccountInfo from "./component/AccountInfo";
import HistoryOrder from "./component/HistoryOrder";
import {Tab, Tabs} from "react-bootstrap";
import Footer from "../../component/common/footer/Footer";

class ShoppingCart extends Component {
    render() {
        return(
            <div className="shopping--cart_page">
                <Nav />
                <Breadcrumb />
                <div className="container detail_tab mt-4">
                    <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                        <Tab eventKey="home" title="Thông tin của tôi">
                            <AccountInfo/>
                        </Tab>
                        <Tab eventKey="profile" title="Giỏ hàng của tôi">
                            <Cart/>
                        </Tab>
                        <Tab eventKey="contact" title="Lịch sử giao dịch">
                            <HistoryOrder/>
                        </Tab>
                    </Tabs>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default ShoppingCart;
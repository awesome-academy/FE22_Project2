import React, { Component } from 'react';
import SocialNetwork from "./subComponent/SocialNetwork";
import AboutUs from "./subComponent/AboutUs";
import Blog from "./subComponent/Blog";
import SendMail from "./subComponent/SendMail";
import ProductTag from "./subComponent/ProductTag";

class InfoFurther extends Component {
    render() {
        return (
            <div className="container further--info pb-5">
                <SocialNetwork/>

                <div className="further--info--content pt-md-5">
                    <AboutUs/>
                    <Blog/>
                    <SendMail/>
                    <ProductTag/>
                </div>
            </div>
        );
    }
}

export default InfoFurther;
import React, { Component } from 'react';
import NavHome from "./component/NavHome";
import Banner from "./component/Banner";
import Delivery from "./component/Delivery";
import Advance from "./component/Advance";
import Infofounder from "./component/Infofounder";
import HotProduct from "./component/HotProduct";
import InfoFurther from "./component/InfoFurther";
import Footer from "../../component/common/footer/Footer";

class Home extends Component {
    render() {
        return (
            <div className="home_page">
                <NavHome/>
                <Banner/>
                <div className="container pt-md-5 pt-4">
                    <Delivery/>
                    <Advance/>
                    <Infofounder/>
                </div>

                <HotProduct/>
                <InfoFurther/>

                <Footer/>
            </div>
        );
    }
}

export default Home;
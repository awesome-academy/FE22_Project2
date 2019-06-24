import React, { Component } from 'react';
import Nav from "../../component/common/nav/Nav";
import Breadcrumb from "../../component/common/tiltleAddress/titleAddress";
import ImageDetail from "./component/ImageDetail";
import InfoDetail from "./component/InfoDetail";
import TagDetail from "./component/TagDetail";
import SaleHot from "./component/SaleHot";
import RecentProducts from "./component/RecentProducts";

class Detail extends Component {
    render() {
        return(
            <div className="detail_page">
                <Nav />
                <div className="container">
                    <Breadcrumb />

                    <div className="detail_info--main row mt-5 mb-lg-5">
                        <ImageDetail/>
                        <InfoDetail/>
                    </div>

                    <div className="row detail_info--body'">
                        <TagDetail/>
                        <div className="col-lg-4 info--further">
                            <SaleHot/>
                            <RecentProducts/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Detail;
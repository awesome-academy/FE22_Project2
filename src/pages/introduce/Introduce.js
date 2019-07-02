import React, { Component } from 'react';
import Nav from '../../component/common/nav/Nav';
import Breadcrumb from '../../component/common/tiltleAddress/Breadcrumb';
import Footer from '../../component/common/footer/Footer';

import InfoAbout from './InfoAbout';

class Introduce extends Component {
    render() {
        return (
            <div className="introduce_page">
                <Nav />
                <Breadcrumb />
                <div className="container mt-3">
                    <InfoAbout/>
                </div>                
                <Footer/>
            </div>
        );
    }
}

export default Introduce;
import React, { Component } from 'react';
import Nav from '../../component/common/nav/Nav';
import Breadcrumb from '../../component/common/tiltleAddress/Breadcrumb';
import Footer from '../../component/common/footer/Footer';

import InfoContact from './InfoContact';

class Contact extends Component {
    render() {
        return (
            <div className="introduce_page">
                <Nav />
                <Breadcrumb />
                <div className="container mt-3">
                    <InfoContact/>
                </div>                
                <Footer/>
            </div>
        );
    }
}

export default Contact;
import React, { Component } from 'react';
import Nav from '../../component/common/nav/Nav';
import Breadcrumb from '../../component/common/tiltleAddress/Breadcrumb';
import Footer from '../../component/common/footer/Footer';

import InfoBlog from './InfoBlog';

class Blog extends Component {
    render() {
        return(
            <div className="introduce_page">
                <Nav />

                <div className="container">
                    <Breadcrumb />
                </div> 
                
                <InfoBlog/>              
                <Footer/>
            </div>
        );
    }
}

export default Blog;
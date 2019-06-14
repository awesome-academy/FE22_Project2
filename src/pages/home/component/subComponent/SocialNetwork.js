import React, { Component } from 'react';

class SocialNetwork extends Component {
    render() {
        return (
            <div className="social-network pt-5">
                <div className="social--carousel owl-carousel owl-theme pb-3">
                    {/* Item 1*/}
                    <div className="item"><span className="text-center text-uppercase"><i className="fab fa-facebook-f" />&nbsp; Facebook</span></div>
                    <div className="item"><span className="text-center text-uppercase"><i className="fab fa-twitter" />&nbsp; twitter</span></div>
                    <div className="item"><span className="text-center text-uppercase"><i className="fab fa-instagram" />&nbsp; instagram</span></div>
                    <div className="item"><span className="text-center text-uppercase"><i className="fab fa-google-plus-g" />&nbsp; google +</span></div>
                    <div className="item"><span className="text-center text-uppercase"><i className="fab fa-pinterest-p" />&nbsp; pinterest</span></div>
                    <div className="item"><span className="text-center text-uppercase"><i className="fab fa-linkedin-in" />&nbsp; linkedin</span></div>
                </div>
            </div>
        );
    }
}

export default SocialNetwork;
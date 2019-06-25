import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import imgNotFound from '../../images/404/page_404.jpg';

class NotFound extends Component{
    render() {
        return (
            <div className="img_page404">
                <div className="img-thumbnail">
                    <img className="img-fluid" src={imgNotFound} alt="NotFound" />
                </div>
                <div className="input-group mb-3 mt-4">
                    <input className="form-control" type="text" />
                    <div className="input-group-append">
                        <span className="input-group-text"><i className="fas fa-search" /></span>
                    </div>
                </div>
                <div className="contact_404">
                    <Link className="text-uppercase mr-3" to="/">Liên hệ</Link>
                    <Link className="text-uppercase ml-3" to="/">Trang chủ</Link>
                </div>
            </div>
        );
    }
}

export default NotFound;
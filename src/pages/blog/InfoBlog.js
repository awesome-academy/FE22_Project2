import React, { Component } from 'react';
import ItemInfoBlog from './ItemInfoBlog';

class InfoBlog extends Component {
    render() {
        return(
            <div className="container mt-3 mb-5 pl-4">
                <h3 className="text-uppercase">blog</h3>
                <div className="blog--show--item mt-0">
                    <ItemInfoBlog/>
                    <ItemInfoBlog/>
                    <ItemInfoBlog/>
                </div>
            </div>  
        );
    }
}

export default InfoBlog;
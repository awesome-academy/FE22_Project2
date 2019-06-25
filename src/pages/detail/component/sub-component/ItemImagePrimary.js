import React, { Component } from 'react';

class ItemImagePrimary extends Component {
    render() {
        let { path } = this.props;
        if (!path) path = "product_5.jpg";
        return (
            <div className="mySlides ml-md-5 ml-lg-0">
                <img className="img-fluid"
                     src={require("../../../../images/HOME/"+path+"")}
                     alt="img primary"/>
            </div>
        );
    }
}

export default ItemImagePrimary;
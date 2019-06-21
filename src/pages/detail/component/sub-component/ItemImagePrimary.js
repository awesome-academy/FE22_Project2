import React, { Component } from 'react';

class ItemImagePrimary extends Component {
    render() {
        const { path } = this.props;
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
import React, { Component } from 'react';

class ItemImageSub extends Component {
    render() {
        const { path, onClick } = this.props;
        return (
            <div>
                <div className="img-thumbnail_detail--custom mt-3">
                    <img className="demo cursor img-fluid"
                         src={require("../../../../images/Detail/"+path+"")}
                         alt="img sub"
                         onClick={onClick}/>
                </div>
            </div>
        );
    }
}

export default ItemImageSub;
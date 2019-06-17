import React, { Component } from 'react';

class TagItem extends Component {
    render() {
        return (
            <h5><span className="badge badge-secondary p-2 mb-2 ml-2">{this.props.nameTag}</span></h5>
        );
    }
}

export default TagItem;
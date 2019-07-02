import React, { Component } from 'react';

class ItemRowTable extends Component {
    render() {
        return (
            <tbody className="tinfo_cart">{this.props.children}</tbody>
        );
    }
}

export default ItemRowTable
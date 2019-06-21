import React, { Component } from 'react';

class ItemRowTable extends Component {
    render() {
        return (
            <tr>{this.props.children}</tr>
        );
    }
}

export default ItemRowTable
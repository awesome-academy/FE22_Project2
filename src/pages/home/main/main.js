import React, { Component } from 'react';
import Delivery from './delivery'
import Advance from './advance'

class main extends Component {
    render() {
        return (
            <div class="container pt-md-5 pt-4">
                <Delivery></Delivery>
                <Advance></Advance>
            </div>
        );
    }
}

export default main;
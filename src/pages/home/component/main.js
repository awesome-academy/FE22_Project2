import React, { Component } from 'react';
import Delivery from './delivery'
import Advance from './advance'
import InfoFounder from './infofounder'


class main extends Component {
    render() {
        return (
            <div className="container pt-md-5 pt-4">
                <Delivery></Delivery>
                <Advance></Advance>
                <InfoFounder></InfoFounder>
            </div>
        );
    }
}

export default main;
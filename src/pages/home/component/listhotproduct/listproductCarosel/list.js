import React, { Component } from 'react'
import ListPro from './itempro'

export default class list extends Component {
    render() {
        return (
            <div className="product--carousel owl-carousel owl-theme pb-3">
                <ListPro></ListPro>
                <ListPro></ListPro>
                <ListPro></ListPro>
                <ListPro></ListPro>
                <ListPro></ListPro>
                <ListPro></ListPro>
                <ListPro></ListPro>
            </div>
        )
    }
}

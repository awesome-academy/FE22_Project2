import React, { Component } from 'react'
import ImgItemMother1 from '../../../images/HOME/item-mother-1.png'
import ImgItemMother2 from '../../../images/HOME/item-mother-2.png'
import ImgItemR from '../../../images/HOME/item_2--right--img.jpg'
import ImgItemL from '../../../images/HOME/Item_3--left--img.jpg'
import ImgItemMother3 from '../../../images/HOME/item-mother-3.png'
import ImgItemMother4 from '../../../images/HOME/item-mother-4.png'

export default class advance extends Component {
    render() {
        return (
            <div className="box_info--item pt-sm-4 pt-4 pb-3 row">
                {/* Row 1*/}
                <div className="box_info--item--1 pr-md-1 col-md-6 col-sm-12">
                    <div className="item--sub--1"><a href="/"><img className="img-fluid" src={ImgItemMother1} alt="" /></a></div>
                    <div className="item--sub--2 pt-md-2 pt-sm-2"><a href="/"><img className="img-fluid" src={ImgItemMother2} alt="" /></a></div>
                </div>
                <div className="box_info--item--2 pt-sm-2 pt-2 pt-md-0 pl-md-1 col-md-6 col-sm-12"><a href="/"><img className="img-fluid" src={ImgItemR} alt="" /></a></div>
                {/* Row 2*/}
                <div className="box_info--item--2 pt-sm-2 pt-2 pr-md-1 col-md-6 col-sm-12"><a href="/"><img className="img-fluid" src={ImgItemL} alt="" /></a></div>
                <div className="box_info--item--1 pt-sm-2 pt-2 pl-md-1 col-md-6 col-sm-12">
                    <div className="item--sub--1"><a href="/"><img className="img-fluid" src={ImgItemMother3} alt="" /></a></div>
                    <div className="item--sub--2 pt-md-2 pt-sm-2"><a href="/"><img className="img-fluid" src={ImgItemMother4} alt="" /></a></div>
                </div>
            </div>


        )
    }
}

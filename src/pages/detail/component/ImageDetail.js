import React, { Component } from 'react';

import imgArrowUp from '../../../images/Detail/arrow-up.png';
import imgArrowDown from '../../../images/Detail/arrow-down.png';
import ItemImagePrimary from "./sub-component/ItemImagePrimary";
import ItemImageSub from "./sub-component/ItemImageSub";

var slideIndex = 1;

class ImageDetail extends Component {
    componentDidMount() {
        this.showSlides(slideIndex);
    }

    plusSlides(n) {
        this.showSlides(slideIndex += n);
    }

    currentSlide(n) {
        this.showSlides(slideIndex = n);
    }

    showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("demo");

        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active_detail--custom", "");
        }

        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active_detail--custom";
    }

    render() {
        let temp = JSON.parse(localStorage.getItem('item-detail'));
        if (!temp) temp = [];
        let item = temp[temp.length-1];
        return (
            <div className="row_detail--custom col-lg-6 col-12">
                <div className="category_detail mr-2">
                    <span className="prev" onClick={() => this.plusSlides(-1)}>
                        <img className="img-fluid"
                             src={imgArrowUp} alt="Up"/>
                    </span>

                    <ItemImageSub path="product_sub--1.jpg"
                                  onClick={() => this.currentSlide(1)}/>
                    <ItemImageSub path="product_sub--2.jpg"
                                  onClick={() => this.currentSlide(2)}/>
                    <ItemImageSub path="product_sub--3.jpg"
                                  onClick={() => this.currentSlide(3)}/>
                    <ItemImageSub path="product_sub--4.jpg"
                                  onClick={() => this.currentSlide(4)}/>

                    <span className="next" onClick={() => this.plusSlides(1)}>
                        <img className="img-fluid"
                             src={imgArrowDown} alt="Down"/>
                    </span>
                </div>
                <div className="column show--item">
                    <ItemImagePrimary path={item.image}/>
                    <ItemImagePrimary path="product_4.jpg"/>
                    <ItemImagePrimary path="product_3.jpg"/>
                    <ItemImagePrimary path="product_2.jpg"/>
                </div>
            </div>
        );
    }
}

export default ImageDetail;
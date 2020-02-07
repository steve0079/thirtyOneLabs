import React from 'react';
import Slider from "react-slick"

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css'

import sliderImage1 from '../../images/NLMLAB1b_slider.jpg'
import sliderImage2 from '../../images/NLMLAB5b_slider.jpg'
import sliderImage3 from '../../images/NLMLAB8b_slider.jpg'
import sliderImage4 from '../../images/NLMLAB111920x1080c_slider.jpg'

const SimpleSlider = () => {

    const settings = {
        slickPlay: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 6000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
    };

    return (
        <Slider { ...settings }>
                <div className="carousel-image-container">
                    <p className="carousel-image-text">Our in-house testing analytics technology maximizes quality control while increasing production. All material is micro-extracted and tested upon delivery, and at key milestones throughout the manufacturing process.</p>
                    <img src={sliderImage1} alt="" />
                </div>
                <div className="carousel-image-container">
                    <p className="carousel-image-text">Product stability and continuity is critical to producing a quality product. All inbound biomass is secured and stored at subzero temperatures prior to extraction. And all finished product is stored in our secure and climate-controlled facilities.</p>
                    <img src={sliderImage2} alt="" />
                </div>
                <div className="carousel-image-container">
                    <p className="carousel-image-text">We understand that consistent test results can be the biggest pain point in the supply chain. We work closely with our customers and testing partners to develop sampling and testing procedures that ensure product integrity and chain of custody.</p>
                    <img src={sliderImage3} alt="" />
                </div>
                <div className="carousel-image-container">
                    <p className="carousel-image-text">Our proprietary 10-step manufacturing process is 10 years in the making. By focusing on reducing heat damage and oxidation, we mitigate product degradation while increasing consistency and throughput.</p>
                    <img src={sliderImage4} alt="" />
                </div>
        </Slider>
    )
};

export default SimpleSlider
import React from 'react';
import Slider from 'infinite-react-carousel';

import './Carousel.css'

import sliderImage1 from '../../images/NLMLAB1b.jpg'
import sliderImage2 from '../../images/NLMLAB5b.jpg'
import sliderImage3 from '../../images/NLMLAB8b.jpg'
import sliderImage4 from '../../images/NLMLAB111920x1080c.jpg'

const Carousel = (props) => {

    return (
        <Slider className="background">
            <div className="carousel-image-container">
                <img src={sliderImage1} alt="" className="carousel-image" />
                <p className="carousel-image-text">Our in-house testing analytics technology maximizes quality control while increasing production. All material is micro-extracted and tested upon delivery, and at key milestones throughout the manufacturing process.</p>
            </div>
            <div className="carousel-image-container">
                <img src={sliderImage2} alt="" className="carousel-image" />
                <p className="carousel-image-text">Product stability and continuity is critical to producing a quality product. All inbound biomass is secured and stored at subzero temperatures prior to extraction. And all finished product is stored in our secure and climate-controlled facilities.</p>
            </div>
            <div className="carousel-image-container">
                <img src={sliderImage3} alt="" className="carousel-image" />
                <p className="carousel-image-text">We understand that consistent test results can be the biggest pain point in the supply chain. We work closely with our customers and testing partners to develop sampling and testing procedures that ensure product integrity and chain of custody.</p>
            </div>
            <div className="carousel-image-container">
                <img src={sliderImage4} alt="" className="carousel-image" />
                <p className="carousel-image-text">Our proprietary 10-step manufacturing process is 10 years in the making. By focusing on reducing heat damage and oxidation, we mitigate product degradation while increasing consistency and throughput.</p>
            </div>
        </Slider>
    )
};

export default Carousel
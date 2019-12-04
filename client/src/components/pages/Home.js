import React from 'react'
import './Home.css';
import AgeVerification from '../layout/AgeVerification'
import homeimage from '../../images/NLMLAB5b.jpg'
import videoimage from '../../images/NLMLAB111920x1080c.jpg'
import supplyimage from '../../images/NLMLAB_2_1200x.jpg'
import processimage from '../../images/NLMLAB_8_1200x.jpg'
const Home = () => {

    return (
        <div className="background">
            <div className="verify-display">
                <AgeVerification />
                <img src={homeimage} alt="" />
            </div>
            <div className="home_text_container">
                <h1 className="homepage-section-title">Distillate Solutions Delivered</h1>
                <p className="homebody">We produce high quality THC distillate used by industry-leading cannabis brands, co-packers, manufacturers and distributors throughout California.  Our facilities are powered by world-class manufacturing experts and state-of-the-art extraction and distillation equipment.  All of which drive our commitment to quality, consistency and transparency.</p>
                <button className="btn btn-lg btn-danger">Buy Now</button>
            </div>
            <img src={videoimage} alt="" />
            <div className="home_callout_container">
                <h3 className="homepage-section-subtitle">FIXED PRICE. MAXIMUM POTENCY. GUARANTEED SUPPLY.</h3>
                <button className="btn btn-lg btn-danger">Our Product</button>
            </div>
            <div className="home-grid-container">
                <img src={supplyimage} alt="" className="lft-image1" />
                <h1 className="lft-column2">Supply Contracts <br />Available</h1>
                <button className="lft-column3 btn btn-lg btn-danger">Contact Us</button>
            </div>
            <div className="home-grid-container">
                <h1 className="rht-column1">Our Process</h1>
                <p className="rht-column2">We partner with our clients from start to finish, focusing on their specific needs while producing effective scalable strategies, fixed priced and guaranteed supply contracts.</p>
                <button className="rht-column3 btn btn-lg btn-danger">Learn More</button>
                <img src={processimage} alt="" className="rht-image4" />
            </div>
        </div>
    )
}

export default Home

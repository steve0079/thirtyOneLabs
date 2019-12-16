import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Home.css';
import RegisterLogin from '../layout/RegisterLogin'
import homeimage from '../../images/NLMLAB_6_1500x.jpg'
import videoimage from '../../images/NLMLAB_videoImage.jpg'
import supplyimage from '../../images/NLMLAB_2_1200x.jpg'
import processimage from '../../images/NLMLAB_8_1200x.jpg'
import AgeVerification from '../layout/AgeVerification'

const Home = () => {

    const [age, setAge] = useState(false)

    useEffect(() => {
        document.title = 'Home | ThirtyOneLabs | 2020'
    })

    return (
        <div className="background">
            <div className="verify-display">
                {age ? <RegisterLogin /> : <AgeVerification setAge={setAge}/>}
                <div className="home-main-image">
                    <img src={homeimage} alt="" />
                </div>
            </div>
            <div id="guestStart" className="home_text_container">
                <h1 className="homepage-section-title">Distillate Solutions Delivered</h1>
                <p className="homebody">We produce high quality THC distillate used by industry-leading cannabis brands, co-packers, manufacturers and distributors throughout California.  Our facilities are powered by world-class manufacturing experts and state-of-the-art extraction and distillation equipment.  All of which drive our commitment to quality, consistency and transparency.</p>
                <a href="mailto:sales@ThirtyOneLabs.com"><button className="btn btn-danger">Buy Now</button></a>
            </div>
            <div className="video_container">
                <div className="video_play">
                    <a href="https://youtu.be/aCSH0lYnZ2c" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube fa-7x" /></a>
                </div>
                <div className="video-image">
                    <img src={videoimage} alt="" />
                </div>
            </div>
            <div className="home_callout_container">
                <h3 className="homepage-section-subtitle">FIXED PRICE. MAXIMUM POTENCY. GUARANTEED SUPPLY.</h3>
                <Link to="/products">
                    <button className="btn btn-lg btn-danger">Our Product</button>
                </Link>
            </div>
            <div className="home-grid-container">
                <div className="lft-column1">
                    <img src={supplyimage} alt="" className="lft-column-image" />
                </div>
                <div className="lft-column2">
                    <h1>Supply Contracts <br />Available</h1>
                    <p className="lft-column-text" />
                    <a href="mailto:sales@ThirtyOneLabs.com"><button className="btn btn-danger">Contact Us</button></a>
                </div>
            </div>
            <div className="home-grid-container">
                <div className="rht-column1">
                    <h1>Our Process</h1>
                    <p className="rht-column-text">We partner with our clients from start to finish, focusing on their specific needs while producing effective scalable strategies, fixed priced and guaranteed supply contracts.</p>
                    <Link to='/process'>
                        <button className="btn btn-danger">Learn More</button>
                    </Link>
                </div>
                <div className="rht-column2">
                    <img src={processimage} alt="" className="rht-column-image" />
                </div>
            </div>
        </div>
    )
}

export default Home

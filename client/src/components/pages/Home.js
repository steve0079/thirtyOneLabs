import React from 'react'
import './Home.css';
import homeimage from '../../images/NLMLAB5b.jpg'
import videoimage from '../../images/NLMLAB111920x1080c.jpg'
const Home = () => {
    return (
        <div className="background">
            <img src={homeimage} alt="" />
            <div className="home_text_container">
                <h1 className="homepage-section-title">Distillate Solutions Delivered</h1>
                <p className="homebody">We produce high quality THC distillate used by industry-leading cannabis brands, co-packers, manufacturers and distributors throughout California.  Our facilities are powered by world-class manufacturing experts and state-of-the-art extraction and distillation equipment.  All of which drive our commitment to quality, consistency and transparency.</p>
                <button className="btn btn-lg btn-danger">Buy Now</button>
            </div>
            <img src={videoimage} alt="" />
        </div>
    )
}

export default Home

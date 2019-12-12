import React, { Fragment } from 'react'

import OurPromise from '../../images/NLMLABS_PromiseImage.jpg'

import './About.css'

const About = () => {

    return (
        <Fragment>
            <div>
                <div>
                    <div className="about_text_container">
                        <h2 className="about-section-title">OUR MISSION</h2>
                        <p className="aboutbody">Rooted in California, we are dedicated to the craft. With over a decade of experience in botanical extraction, we are also pioneers. We measure ourselves by our ability to improve quality and are committed to continuous improvement.</p>
                        <p className="aboutbody">We understand that quality, consistency and transparency are critical for the success of your business. We work with industry-leading brands, co-packers, manufacturers and distributors to truly power brands. High-quality THC distillate is the foundation for your brand and the foundation of our business.</p>
                    </div>
                </div>
                <div className="aboutImage-background">
                    <div className="aboutImage">
                        <img src={OurPromise} alt="" />
                    </div>
                    <h2 className="promise-section-title">OUR PROMISE</h2>
                    <p className="promisebody">FIXED PRICE.</p>
                    <p className="promisebody">MAXIMUM POTENCY.</p>
                    <p className="promisebody">GUARANTEED SUPPLY.</p>
                </div>
            </div>
        </Fragment>
    )
}

export default About

import React, { Fragment, useEffect, useContext } from 'react'
import AgeContext from '../../context/age/ageContext'

import OurPromise from '../../images/NLMLABS_PromiseImage.jpg'
import homeimage from '../../images/NLMLAB_6_1500x.jpg'
import visionImage from '../../images/NLMLAB_visionImage1.jpg'

import './About.css'

const About = () => {

    const ageContext = useContext(AgeContext)

    const { isAgeVerified } = ageContext;

    useEffect(() => {
        document.title = 'About Us | ThirtyOneLabs'
        isAgeVerified()
        // eslint-disable-next-line
    },[])

    return (
        <Fragment>
            <div>
                <div>
                    <div className="about_text_container">
                        <h2 className="about-section-title">Our Mission</h2>
                        <p className="aboutbody">Rooted in California, we are dedicated to the craft. With over a decade of experience in botanical extraction, we are also pioneers. We measure ourselves by our ability to improve quality and are committed to continuous improvement.</p>
                        <p className="aboutbody">We understand that quality, consistency and transparency are critical for the success of your business. We work with industry-leading brands, co-packers, manufacturers and distributors to truly power brands. High-quality THC distillate is the foundation for your brand and the foundation of our business.</p>
                    </div>
                </div>
                <div className="aboutImage-background">
                    <div className="aboutImage">
                        <img src={OurPromise} alt="" />
                    </div>
                    <div>
                        <h2 className="promise-section-title">OUR PROMISE</h2>
                        <p className="promisebody">FIXED PRICE.</p>
                        <p className="promisebody">MAXIMUM POTENCY.</p>
                        <p className="promisebody">GUARANTEED SUPPLY.</p>
                    </div>
                </div>
                <div className="vision_container">
                    <div className="visionImage">
                        <img src={visionImage} alt="" />
                    </div>
                    <div>
                        <h2 className="vision-title">OUR VISION</h2>
                        <h3 className="vision-subtitle">We are on a journey for <br />continuous improvement.</h3>
                        <p className="visionbody">We are committed to responsibly sharing the positive impact that plant-based medicines can have on the health and healing of people, communities and the planet at large.</p>
                    </div>
                    <div className="visionImage">
                        <img src={homeimage} alt="" />
                    </div>
                </div>
                <div>
                    <h2 className="ourfamily">OUR FAMILY OF LABS</h2>
                </div>
                <div className="lab_container">
                    <div>
                        <h2 className="labs-title">BPX, LLC</h2>
                        <p className="labsbody">Cathedral City, CA</p>
                        <p className="labsbody">Type 7 Volatile Extraction</p>
                        <p className="labsbody">CDPH-10001886</p>
                    </div>
                    <div>
                        <h2 className="labs-title">BPX, LLC</h2>
                        <p className="labsbody">Cathedral City, CA</p>
                        <p className="labsbody">Type 7 Volatile Extraction</p>
                        <p className="labsbody">CDPH-10001975</p>
                    </div>
                    <div>
                        <h2 className="labs-title">LEAF CONCEPTS, LLC</h2>
                        <p className="labsbody">Costa Mesa, CA</p>
                        <p className="labsbody">Type 7 Volatile Extraction</p>
                        <p className="labsbody">CDPH-10003102</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default About

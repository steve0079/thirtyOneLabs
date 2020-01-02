import React, { Fragment, useEffect, useContext } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import AgeContext from '../../context/age/ageContext'

import ProcessImage from '../../images/NLMLAB131920x1080b.jpg'
import Carousel from '../layout/Carousel'
import './OurProcess.css'

const OurProcess = () => {

    const ageContext = useContext(AgeContext)

    const { isAgeVerified } = ageContext;

    useEffect(() => {
        document.title = 'Our Process | ThirtyOneLabs'
        isAgeVerified()
        // eslint-disable-next-line
    },[])

    return (
        <Fragment>
            <div className="process-background">
                <div className="process-display">
                    <div className="scrollDown">
                        <h3>Scroll Down</h3>
                        <AnchorLink href="#processText"><i className="fas fa-chevron-circle-down fa-2x" /></AnchorLink>
                    </div>
                    <div className="processImage">
                        <img src={ProcessImage} alt="" />
                    </div>
                </div>
                    <div id="processText" className="process_text_container">
                        <h2 className="process-section-title">What We Do</h2>
                        <p className="processbody">We pride ourselves on consistently providing the highest quality THC distillate available to the California marketplace. Our facilities are powered by world-class manufacturing experts and state-of-the-art extraction and distillation equipment. All of which drive our commitment to quality, consistency and transparency.</p>
                    </div>
            </div>
            <div>
            <Carousel />
            </div>
        </Fragment>
    )
}

export default OurProcess

import React, { Fragment, useEffect } from 'react'

import ProcessImage from '../../images/NLMLAB131920x1080b.jpg'
import Carousel from '../layout/Carousel'
import './OurProcess.css'

const OurProcess = () => {

    useEffect(() => {
        document.title = 'Our Process | ThirtyOneLabs'
    })

    return (
        <Fragment>
            <div className="process-background">
                <div>
                    <div className="processImage">
                        <img src={ProcessImage} alt="" />
                    </div>
                    <div className="process_text_container">
                        <h2 className="process-section-title">What We Do</h2>
                        <p className="processbody">We pride ourselves on consistently providing the highest quality THC distillate available to the California marketplace. Our facilities are powered by world-class manufacturing experts and state-of-the-art extraction and distillation equipment. All of which drive our commitment to quality, consistency and transparency.</p>
                    </div>
                </div>
            </div>
            <Carousel />
        </Fragment>
    )
}

export default OurProcess

import React, { useEffect, Fragment } from 'react'
import './LandingPage.css';
import homeimage from '../../images/NLMLAB_6_1500x.jpg'
import AgeVerification from '../layout/AgeVerification'

const LandingPage = () => {


    useEffect(() => {
        document.title = 'Landing Page | ThirtyOneLabs | 2020'
    })

    return (
        <Fragment>
            <div className="verify-age">
                <AgeVerification />
                <div className="verify-main-image">
                    <img src={homeimage} alt="" />
                </div>
            </div>
        </Fragment>
    )
}

export default LandingPage

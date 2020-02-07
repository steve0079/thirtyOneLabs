import React, { useEffect, Fragment } from 'react'
import './LandingPage.css';
import AgeVerification from '../layout/AgeVerification'

const LandingPage = () => {


    useEffect(() => {
        document.title = 'Landing Page | ThirtyOneLabs | 2020'
        // eslint-disable-next-line
    },[])

    return (
        <Fragment>>
                <AgeVerification />
                <div className="verify-main-image"></div>
        </Fragment>
    )
}

export default LandingPage

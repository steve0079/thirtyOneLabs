import React from 'react'
import './AgeVerification.css';

import logo from '../../images/31labs_logo_horz_rev.png'


const AgeVerification = () => {

    const logoStyle = {
        height: '50%',
        width: '50%'
    }


    return (
        <div>
            <div className="age-verification">
                <h1>
                    <img style={logoStyle} src={logo} alt="ThirtyOne Labs" />
                </h1>
                <p className="ageStatement">Must be 21 years or older to enter.</p>
                <p className="ageSubtext">Please click enter to verify your age to continue.</p>
                <div className="">
                    <button className="btn btn-danger age-button">Enter</button>
                    <button className="btn btn-dark age-button"> <a href='http://google.com'>Exit </a></button>
                </div>
            </div>
        </div>
    )
}

export default AgeVerification

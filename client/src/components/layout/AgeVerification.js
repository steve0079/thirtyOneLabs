import React from 'react'
import './AgeVerification.css';

import logo from '../../images/31labs_logo_horz_rev.png'


const AgeVerification = () => {

    const logoStyle = {
        height: '50%',
        width: '50%'
    }

    const uponEnter = () => {
        
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
                    <a href={uponEnter}> <button className="btn btn-danger age-button">Enter</button></a>
                    <a href="http://google.com"> <button className="btn btn-dark age-button">Exit</button></a>
                </div>
            </div>
        </div>
    )
}

export default AgeVerification

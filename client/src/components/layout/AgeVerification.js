import React from 'react'
import { Link } from 'react-router-dom';

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
                <Link to='/home'><button className="btn btn-danger">Enter</button></Link>
                    <a href="http://google.com"> <button className="btn btn-dark age-button">Exit</button></a>
                </div>
            </div>
        </div>
    )
}

export default AgeVerification

import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import AgeContext from '../../context/age/ageContext'

import './AgeVerification.css';

const AgeVerification = () => {


    const ageContext = useContext(AgeContext)

    const { isAgeVerified } = ageContext;

    return (
        <div>
            <div className="verify-container">
                <div className="blank-space"></div>
                <div className="verify-text">
                    <h3>Must be 21 years or older to enter.</h3>
                    <p>Please click enter to verify your age to continue.</p>
                </div>
                <div className="verify-btns">
                    <Link to='/home'><button className="btn btn-danger" onClick={() => isAgeVerified()}>Enter</button></Link>
                    <a href="http://google.com"> <button className="btn btn-dark">Exit</button></a>
                </div>
            </div>
        </div>
    )
}

export default AgeVerification

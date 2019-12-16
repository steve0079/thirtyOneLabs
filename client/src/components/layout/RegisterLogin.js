import React from 'react'
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import logo from '../../images/31labs_logo_horz_rev.png'

import './RegisterLogin.css';


const RegisterLogin = () => {

    const logoStyle = {
        height: '50%',
        width: '50%'
    }

    return (
        <div>
            <div className="register-login">
                <h1>
                    <img style={logoStyle} src={logo} alt="ThirtyOne Labs" />
                </h1>
                <div>
                    <Link to='/register'>
                        <button className="btn btn-dark register-button">REGISTER</button>
                    </Link>
                    <Link to='/login'>
                        <button className="btn btn-danger login-button">LOGIN</button>
                    </Link>
                    <p className="subtext">Continue as a Guest</p>
                    <AnchorLink href="#guestStart">
                        <i className="fas fa-chevron-circle-down fa-2x icon-a" />
                    </AnchorLink>
                </div>
            </div>
        </div>
    )
}

export default RegisterLogin

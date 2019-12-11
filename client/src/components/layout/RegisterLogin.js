import React from 'react'
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './RegisterLogin.css';


const RegisterLogin = () => {


    return (
        <div>
            <div className="register-login">
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

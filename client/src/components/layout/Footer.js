import React from 'react'
import './Footer.css'
import logo from '../../images/31labs_logo_horz_rev.png'

const Footer = () => {

    const logoStyle = {
        padding: '1vh 0 0 0',
        height: '70%',
        width: '70%',
        padding: '30px'
    }

    return (
        <div className="background-footer">
            <ul className="footer-columns">
                <li><img style={logoStyle} src={logo} alt="ThirtyOne Labs" /></li>
                <li> Contact Us</li>
                <li>We want to hear from you on how we can improve our products or services.</li>
                <li>(949) 503-5599</li>
                <li>Info@ThirtyOneLabs.com</li>
                <li>Newsletter</li>
                <li>Join our mailing list for pricing and inventory updates</li>
                <li>email@example.com</li>
            </ul>
        </div>
    )
}

export default Footer

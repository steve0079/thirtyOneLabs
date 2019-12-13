import React, { useState } from 'react'
import './Footer.css'
import logo from '../../images/31labs_logo_horz_rev.png'

const Footer = () => {

    const logoStyle = {
        width: '245px'
    }

    const [subscriber, setSubscriber] = useState({
        email: ''
    })

    const onChange = e => {
        setSubscriber(e.target.value)
    }


    return (
        <div className="background-footer">
            <div className="grid-container">
                <div className="item1"><img style={logoStyle} src={logo} alt="ThirtyOne Labs" /></div>
                <div className="list-header">
                    <h5 className="footer-header">Contact Us</h5>
                    <p className="footer-body">We want to hear from you on how we can improve our products or services.</p>
                    <p className="footer-body">(949) 503-5599</p>
                    <p className="footer-body"><a href="mailto: Info@ThirtyOneLabs.com">Info@ThirtyOneLabs.com</a></p>
                </div>
                <div className="list-header">
                    <h5 className="footer-header">Newsletter</h5>
                    <p className="footer-body">Join our mailing list for pricing and inventory updates. Please enter your email address below.</p>
                    <input type="email" name="email" value={subscriber.email} onChange={onChange} placeholder="email@example.com" />
                    <button className="btn btn-danger">Subscribe</button>
                </div>
            </div>
                    <p className="copyright">ThirtyOne Labs. 2020. ALL RIGHTS RESERVED.</p>
        </div>
    )
}

export default Footer

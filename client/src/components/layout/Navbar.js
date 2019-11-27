import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from '../../images/31labs_logo_horz_rev.png'
import './Navbar.css'

const Navbar = ({ title, icon }) => {

    const logoStyle = {
        padding: '1vh 0 0 0',
        height: '40%',
        width: '40%'
    }

    return (
        <div className="navbar bg-primary">
            <h1>
                <img style={logoStyle} src={logo} alt="ThirtyOne Labs" />
            </h1>
            <ul>
                <li>
                <Link to='/'>Home</Link>
                <Link to='/process'>Our Process</Link>
                <Link to='/products'>Our Products</Link>
                <Link to='/about'>About Us</Link>
                <Link to='/register'>Register</Link>
                <Link to='/login'>Login</Link>
                </li>
            </ul>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,

}

Navbar.defaultProps = {
    title: "ThirtyOne Labs"
}

export default Navbar

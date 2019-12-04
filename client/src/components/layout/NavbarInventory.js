import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from '../../images/31labs_logo_horz_rev.png'
import './Navbar.css'

const NavbarInventory = ({ title, icon }) => {

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
                <Link to='/inventory'>Our Enventory</Link>
                <Link to='/process'>Our Process</Link>
                <Link to='/products'>Our Products</Link>
                <Link to='/about'>About Us</Link>
                <Link to='/'>Logout</Link>
                </li>
            </ul>
        </div>
    )
}

NavbarInventory.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,

}

NavbarInventory.defaultProps = {
    title: "ThirtyOne Labs"
}

export default NavbarInventory

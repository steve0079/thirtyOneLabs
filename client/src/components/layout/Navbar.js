import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import AuthContext from '../../context/auth/authContext'
import InventoryContext from '../../context/inventory/InventoryContext'

import logo from '../../images/31labs_logo_horz_rev.png'
import './Navbar.css'

const Navbar = ({ title }) => {
    const authContext = useContext(AuthContext);
    const inventoryContext = useContext(InventoryContext);

    const { isAuthenticated, logout, user } = authContext;
    const { clearInventory } = inventoryContext;

    const logoStyle = {
        height: '40%',
        width: '40%'
    }

    const onLogout = () => {
        logout();
        clearInventory();
    }

    const authLinks = (
        <Fragment>
            <li className="navbar-link"><a href='/inventory'>Our Inventory</a></li>
            <li className="navbar-link"><a href='/admin'>Admin</a></li>
            <li className="navbar-link"><strong>Hello {user && user.name}</strong></li>
            <li className="navbar-link"><a onClick={onLogout} href="/home">
                <i className="fas fa-sign-out-alt"></i> <span className="hide-sm">Logout</span></a>
            </li>
        </Fragment>
    )

    const guestLinks = (
        <Fragment>
            <li className="navbar-link"><a href='/home'>Home</a></li>
            <li className="navbar-link"><a href='/our_process'>Our Process</a></li>
            <li className="navbar-link"><a href='/our_product'>Our Product</a></li>
            <li className="navbar-link"><a href='/inventory'>Our Inventory</a></li>
            <li className="navbar-link"><a href='/aboutus'>About Us</a></li>
            {/* <li className="navbar-link"><a href='/register'>Register</a></li>
            <li className="navbar-link"><a href='/login'>Login</a></li> */}
        </Fragment>
    )

    // const ageVerificationLinks = (
    //     <Fragment>
    //         <li className="navbar-link">Home</li>
    //         <li className="navbar-link">Our Process</li>
    //         <li className="navbar-link">Our Product</li>
    //         <li className="navbar-link">Our Inventory</li>
    //         <li className="navbar-link">About Us</li>
    //     </Fragment>
    // )

    return (
        <div className="navbar bg-primary">
            <h1>
                <img style={logoStyle} src={logo} alt="ThirtyOne Labs" />
            </h1>
            <ul className="navbar-links">
                {isAuthenticated ? authLinks : guestLinks}
            </ul>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "ThirtyOne Labs"
}

export default Navbar

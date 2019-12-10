import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
            <li>Hello { user && user.name }</li>
            <li>
                <a onClick={onLogout} href="#!">
                    <i className="fas fa-sign-out-alt"></i> <span className="hide-sm">Logout</span>
                </a>
            </li>
        </Fragment>
    )

    const guestLinks = (
        <Fragment>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/process'>Our Process</Link>
                </li>
                <li>
                    <Link to='/products'>Our Products</Link>
                </li>
                <li>
                    <Link to='/about'>About Us</Link>
                </li>
                <li>
                    <Link to='/register'>Register</Link>
                </li>
                <li>
                    <Link to='/login'>Login</Link>
                </li>

        </Fragment>
    )

    return (
        <div className="navbar bg-primary">
            <h1>
                <img style={logoStyle} src={logo} alt="ThirtyOne Labs" />
            </h1>
            <ul>
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

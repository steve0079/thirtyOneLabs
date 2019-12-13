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
            <li className="navbar-link">
                <Link to='/'>Home</Link>
            </li>
            <li className="navbar-link">
                <Link to='/products'>Products</Link>
            </li>
            <li className="navbar-link">
                <Link to='/our_process'>Our Process</Link>
            </li>
            <li className="navbar-link">
                <Link to='/aboutus'>About Us</Link>
            </li>
            <li className="navbar-link">
                <Link to='/inventory'>Inventory</Link>
            </li>
            <li className="navbar-link"><strong>Hello {user && user.name}</strong></li>
            <li className="navbar-link">
                <a onClick={onLogout} href="#!">
                    <i className="fas fa-sign-out-alt"></i> <span className="hide-sm">Logout</span>
                </a>
            </li>
        </Fragment>
    )

    const guestLinks = (
        <Fragment>
            <li className="navbar-link">
                <Link to='/'>Home</Link>
            </li>
            <li className="navbar-link">
                <Link to='/our_process'>Our Process</Link>
            </li>
            <li className="navbar-link">
                <Link to='/our_product'>Our Product</Link>
            </li>
            <li className="navbar-link">
                <Link to='/aboutus'>About Us</Link>
            </li>
            <li className="navbar-link">
                <Link to='/register'>Register</Link>
            </li>
            <li className="navbar-link">
                <Link to='/login'>Login</Link>
            </li>
        </Fragment>
    )

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

import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext'
import InventoryContext from '../../context/inventory/InventoryContext'
import AgeContext from '../../context/age/ageContext'

import logo from '../../images/31labs_logo_horz_rev.png'
import './Navbar.css'

const Navbar = () => {
    const authContext = useContext(AuthContext);
    const inventoryContext = useContext(InventoryContext);
    const ageContext = useContext(AgeContext)

    const { isAuthenticated, logout, user } = authContext;
    const { clearInventory } = inventoryContext;
    const { ageVerified } = ageContext;

    const logoStyle = {
        height: '40%',
        width: '40%'
    }

    const onLogout = () => {
        logout();
        clearInventory();
    }
    
    const guestLinks = (
        <Fragment>
            <Link to='/home' className="navbar-link">Home</Link>
            <Link to='/our_process' className="navbar-link">Our Process</Link>
            <Link to='/our_product' className="navbar-link">Our Product</Link>
            <Link to='/inventory' className="navbar-link">Our Inventory</Link>
            <Link to='/aboutus'className="navbar-link">About Us</Link>
            {/* <Link to='/register' className="navbar-link">Register</Link> */}
            {/* <Link to='/login' className="navbar-link">Login</Link> */}
        </Fragment>
    )

    const authLinks = (
        <Fragment>
            <Link to='/inventory' className="navbar-link">Our Inventory</Link>
            <Link to='/admin' className="navbar-link">Admin</Link>
            <li className="navbar-link"><strong>Hello {user && user.name}</strong></li>
            <Link to='/home' className="navbar-link" onClick={onLogout}>
                <i className="fas fa-sign-out-alt"></i> <span className="hide-sm">Logout</span>
            </Link>
        </Fragment>
    )


    const ageVerificationLinks = (
        <Fragment>
            <li className="navbar-link">Home</li>
            <li className="navbar-link">Our Process</li>
            <li className="navbar-link">Our Product</li>
            <li className="navbar-link">Our Inventory</li>
            <li className="navbar-link">About Us</li>
        </Fragment>
    )

    return (
        <div className="navbar bg-primary">
            <h1>
                <img style={logoStyle} src={logo} alt="ThirtyOne Labs" />
            </h1>
            <ul className="navbar-links">
                {isAuthenticated ? authLinks : ageVerified ? guestLinks : ageVerificationLinks}
            </ul>
        </div>
    )
}



export default Navbar

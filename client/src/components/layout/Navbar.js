import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext'
import InventoryContext from '../../context/inventory/InventoryContext'
import AgeContext from '../../context/age/ageContext'

import './Navbar.css'

const Navbar = () => {
    const authContext = useContext(AuthContext);
    const inventoryContext = useContext(InventoryContext);
    const ageContext = useContext(AgeContext)

    const { isAuthenticated, logout, user } = authContext;
    const { clearInventory } = inventoryContext;
    const { ageVerified } = ageContext;


    const onLogout = () => {
        logout();
        clearInventory();
    }

    const guestLinks = (
        <Fragment>
            <Link to='/home' className="menu-nav-select">Home</Link>
            <Link to='/our_process' className="menu-nav-select">Our Process</Link>
            <Link to='/our_product' className="menu-nav-select">Our Product</Link>
            <Link to='/inventory' className="menu-nav-select">Our Inventory</Link>
            <Link to='/aboutus' className="menu-nav-select">About Us</Link>
            {/* <Link to='/register' className="menu-nav-select">Register</Link> */}
            {/* <Link to='/login' className="menu-nav-select">Login</Link> */}
        </Fragment>
    )

    const authLinks = (
        <Fragment>
            <Link to='/inventory' className="menu-nav-select">Our Inventory</Link>
            <Link to='/admin' className="menu-nav-select">Admin</Link>
            <li className="menu-nav-select"><strong>Hello {user && user.name}</strong></li>
            <Link to='/home' className="menu-nav-select" onClick={onLogout}>
                <i className="fas fa-sign-out-alt"></i> <span className="hide-sm">Logout</span>
            </Link>
        </Fragment>
    )


    const ageVerificationLinks = (
        <Fragment>
            <li className="menu-nav-select">Home</li>
            <li className="menu-nav-select">Our Process</li>
            <li className="menu-nav-select">Our Product</li>
            <li className="menu-nav-select">Our Inventory</li>
            <li className="menu-nav-select">About Us</li>
        </Fragment>
    )

    return (
        <Fragment>
            <div className="nav">
                <ul className="menu-nav">
                    {isAuthenticated ? authLinks : ageVerified ? guestLinks : ageVerificationLinks}
                </ul>
                
                <div className="menu-btn">
                    <span className="menu-btn__burger"></span>
                </div>
            </div>
        </Fragment>
    )
}



export default Navbar

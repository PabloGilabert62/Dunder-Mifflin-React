import './Navbar.css';
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useContext } from 'react';
import { FavoritesContext } from '../../context/FavoritesContext';
import CardWidget from '../CardWidget/CardWidget';

const Navbar = ({prods}) => {

    const {favorites} = useContext(FavoritesContext)

    return( 
        <nav className='navbar- flex-navbar'>

            <img className='company-logo' src='/images/DunderMifflinLogo.png' alt='Dunder Mifflin Logo'/>

            <NavLink to="/home" className={({ isActive }) => isActive ? "active-option-nav" : "option-nav"}>Home</NavLink>
            <NavLink to="/products" className={({ isActive }) => isActive ? "active-option-nav" : "option-nav"}>Products</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "active-option-nav" : "option-nav"}>Contact</NavLink>
            <NavLink to="/location" className={({ isActive }) => isActive ? "active-option-nav" : "option-nav"}>Location</NavLink>
            <NavLink to="/staff" className={({ isActive }) => isActive ? "active-option-nav" : "option-nav"}>Staff</NavLink>

            <Link to='/cart' className='cart-icon position-relative'>
                <CardWidget/>
            </Link>

            <Link to='/favorites' className='fav-icon cart-icon position-relative'>
                <img className='cart-icon' src='../images/heart.png' alt='heart icon'/>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {favorites.length}
                </span>
            </Link>
        </nav>
    )
}

export default Navbar;
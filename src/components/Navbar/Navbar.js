import React from 'react';
import './Navbar.css';
import CartIcon from '../CartIcon/CartIcon';
import CompanyLogo from '../CompanyLogo/CompanyLogo';
import {NavLink} from 'react-router-dom';

const Navbar = () => {

    return( 
        <nav className='navbar- flexCenter'>

            <CompanyLogo/>

            <NavLink className={({ isActive }) => isActive? 'ActiveOption' : 'Option'} to={`/home`}>Home</NavLink>
            <NavLink className={({ isActive }) => isActive? 'ActiveOption' : 'Option'} to={`/prods`}>Prods</NavLink>
            <NavLink className={({ isActive }) => isActive? 'ActiveOption' : 'Option'} to={`/contact`}>Contact</NavLink>
            <NavLink className={({ isActive }) => isActive? 'ActiveOption' : 'Option'} to={`/staff`}>Staff</NavLink>
            <NavLink className={({ isActive }) => isActive? 'ActiveOption' : 'Option'} to={`/location`}>Location</NavLink>
           
            <CartIcon/>
        </nav>
    )
}

export default Navbar;
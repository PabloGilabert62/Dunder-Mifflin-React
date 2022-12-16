import React from 'react';
import './Navbar.css';
import CompanyLogo from '../CompanyLogo/CompanyLogo';
import {NavLink, Link} from 'react-router-dom';
import { useContext } from 'react';
import { FavoritesContext } from '../../context/FavoritesContext';

const Navbar = () => {

    const {favorites} = useContext(FavoritesContext)

    return( 
        <nav className='navbar- flexCenter'>

            <CompanyLogo/>

            <NavLink className={({ isActive }) => isActive? 'ActiveOption' : 'Option'} to={`/home`}>Home</NavLink>
            <NavLink className={({ isActive }) => isActive? 'ActiveOption' : 'Option'} to={`/prods`}>Prods</NavLink>
            <NavLink className={({ isActive }) => isActive? 'ActiveOption' : 'Option'} to={`/contact`}>Contact</NavLink>
            <NavLink className={({ isActive }) => isActive? 'ActiveOption' : 'Option'} to={`/staff`}>Staff</NavLink>
            <NavLink className={({ isActive }) => isActive? 'ActiveOption' : 'Option'} to={`/location`}>Location</NavLink>

            <Link to='/cart' className='cartButton'>Cart:</Link>
            <Link to='/favorites' className='favButton'>Favorites: {favorites.length}</Link>
        </nav>
    )
}

export default Navbar;
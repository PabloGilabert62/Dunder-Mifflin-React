import './Navbar.css';
import React from 'react';
import CompanyLogo from '../CompanyLogo/CompanyLogo';
import { NavLink, Link } from 'react-router-dom';
import { useContext } from 'react';
import { FavoritesContext } from '../../context/FavoritesContext';
import CardWidget from '../CardWidget/CardWidget';

const Navbar = () => {

    const {favorites} = useContext(FavoritesContext)

    return( 
        <nav className='navbar- flexCenter'>

            <img className='CompanyLogo' src='/images/DunderMifflinLogo.png' alt='Dunder Mifflin Logo'/>

            <NavLink className={({ isActive }) => isActive? 'ActiveOption' : 'Option'} to={`/home`}>Home</NavLink>
            <NavLink className={({ isActive }) => isActive? 'ActiveOption' : 'Option'} to={`/prods`}>Prods</NavLink>
            <NavLink className={({ isActive }) => isActive? 'ActiveOption' : 'Option'} to={`/contact`}>Contact</NavLink>
            <NavLink className={({ isActive }) => isActive? 'ActiveOption' : 'Option'} to={`/staff`}>Staff</NavLink>
            <NavLink className={({ isActive }) => isActive? 'ActiveOption' : 'Option'} to={`/location`}>Location</NavLink>

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
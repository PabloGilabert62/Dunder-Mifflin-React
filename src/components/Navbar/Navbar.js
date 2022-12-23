import './Navbar.css';
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useContext } from 'react';
import { FavoritesContext } from '../../context/FavoritesContext';
import CardWidget from '../CardWidget/CardWidget';

const Navbar = ({prods}) => {

    const {favorites} = useContext(FavoritesContext)

    return( 
        <nav className='navbar- flexCenter'>

            <img className='CompanyLogo' src='/images/DunderMifflinLogo.png' alt='Dunder Mifflin Logo'/>

            <Link to="/all">All Products</Link>
            <Link to="/category/gastronomy">Gastronomy</Link>
            <Link to="/category/office">Office</Link>
            <Link to="/category/paper">Paper</Link>
            {/* <NavLink to='/category/categoria4' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option' }>Paper</NavLink> */}

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
import React from 'react';
import './Navbar.css';
import CartIcon from '../CartIcon/CartIcon';
import CompanyLogo from '../CompanyLogo/CompanyLogo';
import { Link } from 'react-router-dom';

const Navbar = () => 
{
    return( 
        <nav className='navbar- flexCenter'>

            <CompanyLogo/>

            <Link className='btnNav' to={`/home`}>Home</Link>
            <Link className='btnNav' to={`/prods`}>Prods</Link>
            <Link className='btnNav' to={`/contact`}>Contact</Link>
            <Link className='btnNav' to={`/staff`}>Staff</Link>
            <Link className='btnNav' to={`/location`}>Location</Link>
           
            <CartIcon/>
        </nav>
    )
}

export default Navbar;
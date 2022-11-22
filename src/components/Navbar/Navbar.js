import React from 'react';
import './Navbar.css';
import Button from '../Button/Button';
import CartIcon from '../CartIcon/CartIcon';
import CompanyLogo from '../CompanyLogo/CompanyLogo';

const Navbar = () => 
{
    return( 
        <nav className='navbar- flexCenter'>

            <CompanyLogo/>

            <Button btnStyle={"btnNav"}>Home</Button>
            <Button btnStyle={"btnNav"}>Products</Button>
            <Button btnStyle={"btnNav"}>Contact</Button>
            <Button btnStyle={"btnNav"}>Staff</Button>
            <Button btnStyle={"btnNav"}>Location</Button>
           
            <CartIcon/>
        </nav>
    )
}

export default Navbar;
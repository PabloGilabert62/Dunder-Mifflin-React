import './NavbarCategory.css'
import React from 'react'
import { NavLink } from 'react-router-dom'

const NavbarCategory = () => {
    return(
        <div>
            <p className='title-category'>See our products below!</p>
            <div className='flex-category'>

                <NavLink to="/products/all" className={({ isActive }) => isActive ? "active-option" : "option"}>
                    All Products
                </NavLink>

                <NavLink to="/products/category/gastronomy" className={({ isActive }) => isActive ? "active-option" : "option"}>
                    Gastronomy
                </NavLink>

                <NavLink to="/products/category/office" className={({ isActive }) => isActive ? "active-option" : "option"}>
                    Office
                </NavLink>

                <NavLink to="/products/category/paper" className={({ isActive }) => isActive ? "active-option" : "option"}>
                    Paper
                </NavLink>
            </div>
        </div>
    ) 
}

export default NavbarCategory
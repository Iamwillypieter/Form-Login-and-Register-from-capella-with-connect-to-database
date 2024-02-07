import React from "react";
import logo from '../../assets/CAPELLAMEDAN.png'
import './Navbar.css'

const Navbar = ({children}) => {
    return (
        <div className="nav-container">
            <img src={logo} alt="" />
            {children}
        </div>
    )
}

export default Navbar;
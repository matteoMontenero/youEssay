import React from "react";
import Logo from '../assets/youessay-logo.svg';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <NavLink to="/videos" className="navbar-brand">Essays</NavLink>
                        <NavLink to="/about" className="navbar-brand">About</NavLink>
                        <NavLink to="/lucky"> <button>  I feel Lucky! </button></NavLink>
                    </div>
                </div>
            </nav>
        </>
    )

}

export default Navbar;
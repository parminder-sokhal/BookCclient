import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/react.svg";


function Header(){
    return(
        <header>
            <Link to="/" className="logo">
            <img src={logo} alt="ReactJS" /> ReactJs
            </Link>

            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/books">books</NavLink>
                <NavLink to="/about">about</NavLink>

            </nav>
        </header>
    );
}

export default Header;
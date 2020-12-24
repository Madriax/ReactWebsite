import React from "react";
import routes from "../routes";
import logo from "../Assets/icons/logo.png"
import {
    Link
} from "react-router-dom";

function Navbar() {

    /**
     * Return the path for a desired route name
     * @param name Route name
     * @returns Route path
     */
    function getPathByName(name: string): string {
        return routes[routes.findIndex((route) => route.name == name)].path;
    }

    return (
        <header>
            <nav className="navbar">
                <a href="#" className="logo">
                    <img src={logo} alt="Logo" />
                </a>
                <ul className="nav-links">
                    <li className="nav-item"><a href="#">Home</a></li>
                    <li className="nav-item"><a href="#">About</a></li>
                    <li className="nav-item"><a href="#">Services</a></li>
                    <li className="nav-item"><a href="#">Portfolio</a></li>
                    <li className="nav-item"><a href="#">Blog</a></li>
                    <li className="nav-item"><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>

    );
}

export default Navbar;
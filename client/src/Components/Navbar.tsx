import React from "react";
import routes from "../routes";
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
        <div className="nav">
            <Link to={getPathByName('Home')} >Home</Link>
            <Link to={getPathByName('About')} >About</Link>
            <Link to={getPathByName('Blog')} >Blog</Link>
            <Link to={getPathByName('Contact')} >Contact</Link>
        </div>
    );
}

export default Navbar;
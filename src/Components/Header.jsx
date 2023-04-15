import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-sky-200">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Authentication PRO</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
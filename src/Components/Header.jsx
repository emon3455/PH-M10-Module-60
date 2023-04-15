import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Header = () => {

    const {user,logOut} = useContext(AuthContext);

    const handleSignOut=() =>{
        logOut()
        .then(()=>{})
        .cath(er=>{
            console.log(er.message);
        })
    }   

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
                    <li><Link to="/orders">Orders</Link></li>
                    <li>
                        {
                            user 
                            ? 
                            <p>
                            <span>{user.email}</span>
                            <button onClick={handleSignOut} className='btn btn-xs'>Log Out</button>
                            </p> 
                            : 
                            <></>
                        }
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
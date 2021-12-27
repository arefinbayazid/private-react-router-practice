import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const {user, signOutUser} = useAuth();
    return (
        <nav className = "header_container">
            <Link to = "/home">Home</Link>
            <Link to = "/shop">Shop</Link>
            <Link to = "/register">Register</Link>
            <Link to = "/login">Login</Link>
            {
                user.email && <div>
                <span>{user.displayName}</span> <button onClick={signOutUser}>Log Out</button>
                </div>
            }
        </nav>
    );
};

export default Header;
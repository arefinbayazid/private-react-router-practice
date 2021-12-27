import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const LogIn = () => {
    const {googleSignInBtn} = useAuth();
    return (
        <div className='page_container'>
            <h1>This is login page</h1>
            <button onClick={googleSignInBtn}>Log In</button>
            <Link to= "/register">I have no account !</Link>
        
        </div>
    );
};

export default LogIn;
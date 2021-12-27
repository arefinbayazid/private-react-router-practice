import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className = "page_container">
            <h1>This is register page</h1>
            <div>
                <input type ="text" />
                <br />
                <input type ="text" />
                <br />
                <button>Sign Up</button>
            </div>
            <Link to = "/login">Have a account ?</Link>
        </div>
    );
};

export default Register;
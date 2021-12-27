import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, redirectTo }) => {
    let isAuthenticated = useAuth()
    console.log(isAuthenticated.user.email)
    return isAuthenticated?.user?.email ? children : <Navigate to={redirectTo} />;
};

export default PrivateRoute;


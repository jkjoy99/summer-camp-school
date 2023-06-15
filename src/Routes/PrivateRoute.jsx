import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user , loading} = useContext(AuthContext);

    const Location = useLocation();

    if(loading){
       return <span className="loading loading-spinner text-primary"></span>
    }

    if(user){
        return children;
    }
    return <Navigate to="/login" state={{from: Location}} replace></Navigate>
    
};

export default PrivateRoute;



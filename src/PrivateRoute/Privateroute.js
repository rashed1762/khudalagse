import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './../context/AuthProvider';

const Privateroute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location=useLocation();

    if(loading){
        return <button className="btn loading">loading</button>
    }
    if(user){
        return children;
    }
  return <Navigate to="/login" state={{from:location}} replace></Navigate>
}

export default Privateroute;
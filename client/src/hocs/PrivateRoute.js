import React, { useContext } from "react";
import { BrowserRouter,Routes,Route, Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";


const PrivateRoute = ({ children, roles }) => {
  const { isAuthenticated, user } = useContext(AuthContext);
  console.log("pvt routes got hit")
  
  if (!isAuthenticated) { 
    return <Navigate to="/login" replace />;
  }
  if (!roles.includes(user.role)) { 
    return <Navigate to="/login" replace />;
  }
  return children
}

export default PrivateRoute



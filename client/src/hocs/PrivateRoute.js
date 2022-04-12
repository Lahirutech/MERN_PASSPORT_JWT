import React, { useContext } from "react";
import { BrowserRouter,Routes,Route, Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";


const  PrivateRoute=({ component: Component, roles, ...rest })=> {
  return (
    <div>Private</div>
  )
}

export default PrivateRoute



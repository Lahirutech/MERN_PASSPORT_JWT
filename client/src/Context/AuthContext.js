import React, { createContext, useState, useEffect } from "react";
import AuthService from "../Services/AuthService";
import axios from "axios";
import jwt_decode from "jwt-decode";

export const AuthContext = createContext(); 
export default ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

const instance = axios.create();

const refreshToken = async () => {
  try {
    const res = await axios.post("/refresh", { token:localStorage.getItem("refreshToken") });
    // setUser({
    //   ...user,
    //   accessToken: res.data.accessToken,
    //   refreshToken: res.data.refreshToken,
    // });
    localStorage.setItem("token", res.data.accessToken);
    localStorage.setItem("refreshToken",res.data.refreshToken);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

instance.interceptors.request.use(
  async (config) => {
    console.log("axios intercepted",config.url) 
    let currentDate = new Date();
    const decodedToken = jwt_decode(localStorage.getItem("token"));

    console.log(decodedToken.exp * 1000, currentDate.getTime())
    
    if (decodedToken.exp * 1000 < currentDate.getTime()) {  
      console.log("refreshtoken called")
      const data = await refreshToken();
      config.headers["authorization"] = "Bearer " + data.accessToken;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


  useEffect(() => {
    console.log("Authcontext useeffect trigered")
    const token = localStorage.getItem("token");
    console.log("token from auth context",token);
    AuthService.isAuthenticated(token).then((data) => {
      setUser(data.user);
      setIsAuthenticated(data.isAuthenticated);
      setIsLoaded(true);
    });
  }, []);

  return (
    <div>
      {!isLoaded ? (
        <h1>Loading</h1>
      ) : (
        <AuthContext.Provider
          value={{ user, setUser, isAuthenticated, setIsAuthenticated }}
        >
          {children}
        </AuthContext.Provider>
      )}
    </div>
  );
};

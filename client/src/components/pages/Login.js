import React, { useState,useContext,useEffect } from "react";
import axios from "axios";
import { useNavigate,Navigate } from "react-router-dom";
import AuthService from "../../Services/AuthService";
import {AuthContext} from "../../Context/AuthContext";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState(null);
    
    const authContext = useContext(AuthContext);
    const { isAuthenticated, user } = useContext(AuthContext);
    
    useEffect(() => {
        if (isAuthenticated) { 
            return <Navigate to="/protectedpage" replace />;
          }
    }, [])
    
  
    let navigate = useNavigate();

    const submit = () => {
        console.log(username, password);
        let user = {username:username,password:password}
        AuthService.login(user).then(data=>{
            console.log(data);
            const { isAuthenticated,user,message,refreshToken,token} = data;
            if (isAuthenticated) {
                console.log("user",user)
                authContext.setUser(user);
                authContext.setIsAuthenticated(isAuthenticated);
                localStorage.setItem("token", token);
                localStorage.setItem("refreshToken", refreshToken);
                console.log("token from login",token)
                navigate("/protectedpage");
            }
            else
                setMessage(message);
        });
            
    };

    return ( <
        div >
        <
        input type = "text"
        placeholder = "Enter Username"
        value = { username }
        onChange = {
            (event) => setUsername(event.target.value) }
        /> <
        input type = "password"
        placeholder = "Enter password"
        value = { password }
        onChange = {
            (event) => setPassword(event.target.value) }
        /> <button onClick={submit}> Login </button>
            </div>
    );
}
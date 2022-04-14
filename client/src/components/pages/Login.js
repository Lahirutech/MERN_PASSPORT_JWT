import React, { useState,useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthService from "../../Services/AuthService";
import {AuthContext} from "../../Context/AuthContext";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState(null);
    
    const authContext = useContext(AuthContext);


    let navigate = useNavigate();

    const submit = () => {
        console.log(username, password);
        let user = {username:username,password:password}
        AuthService.login(user).then(data=>{
            console.log(data);
            const { isAuthenticated,user,message} = data;
            if (isAuthenticated) {
                console.log("user",user)
                authContext.setUser(user);
                authContext.setIsAuthenticated(isAuthenticated);
                navigate("/protected");
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
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const submit = () => {
    console.log(username, password);
    axios
      .post("http://localhost:5001/user/login", { username, password })
      .then((user) => {
        console.log(user);
        localStorage.setItem("token", user.data.token);
        navigate("/protected");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />

      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button onClick={submit}>Login</button>
    </div>
  );
}

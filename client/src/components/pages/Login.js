import React, { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {
    console.log(username, password);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={(event) => setUsername(event.target)}
      />

      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(event) => setUsername(event.target)}
      />
      <button onClick={submit}></button>
    </div>
  );
}

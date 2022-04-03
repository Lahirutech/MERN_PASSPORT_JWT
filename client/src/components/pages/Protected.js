import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Protected() {
  let navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("token", token);
    axios
      .get("http://localhost:5001/auth/protected", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        navigate("/login");
      });
  }, []);
  return <div> Protected </div>;
}

import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Protected() {
  let navigate = useNavigate();
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   console.log("protected loaded");
  //   axios
  //     .get("http://localhost:5001/auth/protected", {
  //       headers: {
  //         Authorization: token,
  //       },
  //     })
  //     .then((res) => {
  //       console.log("response",res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       navigate("/login");
  //     });
  // }, []);
  return <div> Protected  component</div>;
}

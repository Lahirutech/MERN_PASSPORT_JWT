import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

export default function Profile() {
    const { isAuthenticated, user } = useContext(AuthContext);
console.log("isAuthenticated from Profile",isAuthenticated)
  return (
    <div>Profile Page protected</div>
  )
}

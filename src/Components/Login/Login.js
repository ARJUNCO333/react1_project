import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import "./Login.css"

function Login() {
  return (
    <div className="user">
      <div className="user-icon">
        <i
          style={{ fontSize: "25px", color: "#1695c0" }}
          className="fa-solid fa-user"
        />
        <span className="user-text">Karen Yale</span>
      </div>
    </div>
  );
}

export default Login;

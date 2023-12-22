import React from "react";
import "./NavBar.css";
import "@fortawesome/fontawesome-free/css/all.css";
import SearchBar from "../SearchBar/SearchBar";
import Login from "../Login/Login";
import Notification from "../Notification/Notification";
import logo from "../Assets/logo.PNG";

const NavBar = () => {
  return (
    <div className="navbar">
      
        <div className="nav-logo" style={{backgroundColor:"#3e8bf5", padding:"22px" }}>
          <img src={logo} alt="logo" style={{ width: "50px", height: "50px",}} />
          <h1>REFAPEDIA   </h1>
        </div>
        
      
      <div className="patient-search">
        <h1>Patient Search</h1>
      </div>
      <SearchBar />
      <Login />
      <Notification />
    </div>
  );
};

export default NavBar;

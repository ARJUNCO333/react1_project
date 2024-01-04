import React from "react";
import "./NavBarOld.css";
import "@fortawesome/fontawesome-free/css/all.css";
import SearchBarOld from "../SearchBarOld/SearchBarOld";
import LoginOld from "../LoginOld/LoginOld";
import NotificationOld from "../NotificationOld/NotificationOld";

const NavBarOld = () => {
    console.log("old")
  return (
    <div className="navbar">
      
        <div className="nav-logo" style={{backgroundColor:"#3e8bf5", padding:"22px" }}>
          <img  alt="logo" style={{ width: "50px", height: "50px",}} />
          <h1>REFAPEDIA   </h1>
        </div>
        
      
      <div className="patient-search">
        <h1>Patient Search</h1>
      </div>
      <SearchBarOld />
      <LoginOld />
      <NotificationOld />
    </div>
  );
};

export default NavBarOld;
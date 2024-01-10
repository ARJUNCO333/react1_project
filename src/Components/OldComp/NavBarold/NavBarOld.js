import React from "react";
import "./NavBarOld.css";
import "@fortawesome/fontawesome-free/css/all.css";
import SearchBarOld from "../SearchBarOld/SearchBarOld";
import LoginOld from "../LoginOld/LoginOld";
import NotificationOld from "../NotificationOld/NotificationOld";
import { Link } from "react-router-dom";

const NavBarOld = () => {
    
  return (
    <div className="navbar">
      
        <div className="nav-logo" style={{backgroundColor:"#3e8bf5", padding:"22px" }}>
        
          <h1>REFAPEDIA   </h1>
        </div>
        
      
      <div className="patient-search">
        <h1>Patient Search</h1>
      </div>
     
      <SearchBarOld />
      <div>
          <ul>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "20px",
                paddingLeft:"15px"
              }}
            >
              NEW
            </Link>
          </ul>
        </div>
      <LoginOld />
      <NotificationOld />
    </div>
  );
};

export default NavBarOld;

import React, { useState } from "react";
import "./NavBar.css";
import "@fortawesome/fontawesome-free/css/all.css";

const NavBar = () => {
  const [nameSearch, setNameSearch] = useState("");
  const [mrnSearch, setMrnSearch] = useState("");

  const handleKeyPress = (event, searchType) => {
    if (event.key === "Enter") {
      const inputValue = event.target.value;
      console.log(`Entered ${searchType}: ${inputValue}`);
      if (searchType === "Name") {
        setNameSearch("");
      } else if (searchType === "MRN") {
        setMrnSearch("");
      }
      
    }
  };
  return (
    <div className="navbar">
      <div className="brand">
        <h1>
          <span className="blue-background">RefaPedia</span>
          
        </h1>
      </div>
      <div className="patient-search">
        <h1>Patient Search</h1>
      </div>
      <div className="name-search">
        <div className="search-icon">
          <i className="fas fa-search"></i>
        </div>
        <div>
          <label htmlFor="nameSearch"></label>
          <input
            type="text"
            id="nameSearch"
            placeholder="Name Search"
            value={nameSearch}
            onChange={(e) => setNameSearch(e.target.value)}
            onKeyPress={(e) => handleKeyPress(e, "Name")}
          />
        </div>
      </div>
      <div className="mrn-search">
        <div className="search-icon">
          <i className="fas fa-search" />
        </div>
        <div>
          <label htmlFor="mrnSearch"></label>
          <input
            type="text"
            id="mrnSearch"
            placeholder="MRN Search"
            value={mrnSearch}
            onChange={(e) => setMrnSearch(e.target.value)}
            onKeyPress={(e) => handleKeyPress(e, "MRN")}
          />
        </div>
      </div>
      <div className="user">
        <div className="user-icon" >
          <i style={{fontSize: '25px',color:"#1695c0"}} className="fa-solid fa-user"  />
          <span className="user-text">Karen Yale</span>
        </div>
      </div>
      <div className="notification-icon">
        <i className="fa-solid fa-bell" />
      </div>
    </div>
  );
};

export default NavBar;

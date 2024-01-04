import React from 'react'
import  { useState } from "react";
import "./SearchBarOld.css"

function SearchBarOld() {
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
    <div className='searchbar'>
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
      </div>
      
  )
}

export default SearchBarOld
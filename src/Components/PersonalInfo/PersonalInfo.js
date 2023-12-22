import React from "react";
import "./PersonalInfo.css"


function PersonalInfo() {
    return (
      <div className="form1">
        <div className="form-personalinfo">
          <h1>Personal Info</h1>
          <div className="personalinfo-fields">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <div className="personalinfo-fields">
          <input type="text" placeholder="Age" />
            <input type="text" placeholder="Gender" /> 
          </div>
          <div className="personalinfo-fields">
          <input type="text" placeholder="Street Name" />
            <input type="text" placeholder="Town" /> 
          </div>
        </div>
        
        
      </div>
    );
  }
  
  export default PersonalInfo;
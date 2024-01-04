import React from "react";
import "./PreferencesOld.css";

function PreferencesOld() {
  return (
    <div className="form2">
      <div className="form-preferences">
        <h1>Preferences</h1>
        <div className="preferences-fields1">
          <label>Insurance:</label>
          <select>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>

        <div className="preferences-fields2">
          <label>Language:</label>
          <select>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>

        <div className="preferences-fields3">
          <label>Orientation:</label>
          <select>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        <div className="preferences-fields4">
          <label style={{gap:"10px"}}>Special Needs:</label>
          <select>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default PreferencesOld;
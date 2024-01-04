import React from "react";
import "./MedicalHistoryOld.css";

function MedicalHistoryOld() {
  return (
    <div className="form3">
      <div className="form-medicalhistory">
        <h1>Medical History</h1>

        <div className="text-box-container">
          <label></label>
          <textarea
            rows="10"
            cols="50"
            placeholder="Medical History information..."
          />
        </div>
      </div>
    </div>
  );
}

export default MedicalHistoryOld;
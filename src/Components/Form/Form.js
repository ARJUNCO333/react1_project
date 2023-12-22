import React from "react";
import "./Form.css";
import Preferences from "../Prefernces/Preferences";
import MedicalHistory from "../MedicalHistory/MedicalHistory";
import PersonalInfo from "../PersonalInfo/PersonalInfo";

function Form() {
  return (
    <div>
      <PersonalInfo />

      <Preferences />
      <MedicalHistory />
    </div>
  );
}

export default Form;

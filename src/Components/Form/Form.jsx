import React from "react";
import "./Form.css";
import Preferences from "../Prefernces/Preferences";
import MedicalHistory from "../MedicalHistory/MedicalHistory";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import NavBar from "../NavBar/NavBar";

function Form() {
  return (
    <div>
      <NavBar />
      <PersonalInfo />

      <Preferences />
      <MedicalHistory />
    </div>
  );
}

export default Form;

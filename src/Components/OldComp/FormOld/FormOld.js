import React from "react";


import PersonalInfoOld from "./PersonalInfoOld/PersonalInfoOld";
import PreferencesOld from "./PreferncesOld/PreferencesOld";
import MedicalHistoryOld from "./MedicalHistoryOld/MedicalHistoryOld";
import NavBarOld from "../NavBarold/NavBarOld";

function Form() {
  return (
    <div>
      <NavBarOld />
      <PersonalInfoOld />

      <PreferencesOld />
      <MedicalHistoryOld />
    </div>
  );
}

export default Form;

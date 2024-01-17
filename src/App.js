import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import PersonalInfo from "./Components/PersonalInfo/PersonalInfo";
import Preferences from "./Components/Prefernces/Preferences";
import MedicalHistory from "./Components/MedicalHistory/MedicalHistory";

import { ThemeProvider, createTheme } from "@mui/material/styles";

function App() {
  const theme = createTheme();
  return (
    <div>
      <ThemeProvider theme={theme}>
        <NavBar />
        <PersonalInfo />
        <Preferences />
        <MedicalHistory />
      </ThemeProvider>
    </div>
  );
}

export default App;

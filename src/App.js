import React from "react";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Form from "./Components/Form/Form";
import Demo from "./Pages/Demo.jsx";
import NavBarOld from "./Components/OldComp/NavBarold/NavBarOld.js"
import FormOld from "./Components/OldComp/FormOld/FormOld.js"


function App() {

  return (
    <div>
      <Router>
        <NavBar />
        

        <Routes>
          <Route  path="/" element={<Form /> } />
          <Route  path="/demo" element={<Demo /> } />
          <Route  path="/old" element={<FormOld /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

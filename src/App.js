import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Form from "./Components/Form/Form";
import Demo from "./Pages/Demo.jsx";


function App() {
  return (
    <div>
      <Router>
        <NavBar />
        

        <Routes>
          <Route  path="/" element={<Form /> } />
          <Route  path="/demo" element={<Demo /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

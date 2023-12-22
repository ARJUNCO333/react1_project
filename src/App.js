import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Form from "./Components/Form/Form";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Form />

        <Routes>
        
        </Routes>
      </Router>
    </div>
  );
}

export default App;

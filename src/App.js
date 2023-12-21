import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div >
      <Router>
        <NavBar />
        <Routes>

        </Routes>
      </Router>
      
    </div>
  );
}

export default App;

import './App.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer';
import Schemes from './Components/Schemes/Schemes';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/districts/:id" element={<Schemes/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

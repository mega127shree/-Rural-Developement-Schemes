import './App.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Funds1 from './Components/Funds1/Funds1';
import Footer from './Components/Footer';
import Schemes from './Components/Schemes/Schemes';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/districts/:id" element={<Schemes/>}/>
        <Route path="/funds/:id" element={<Funds1/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

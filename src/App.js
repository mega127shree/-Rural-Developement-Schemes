import './App.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Funds from './Components/Funds/Funds';
import Footer from './Components/Footer';
import Schemes from './Components/Schemes/Schemes';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/districts/:id" element={<Schemes/>}/>
        <Route path="/funds/:id" element={<Funds/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

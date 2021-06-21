import React, { useState, Component, render } from "react"; 
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; 
import Who from "./components/Who/Who";
import Luna from "./components/Who/Luna"; 
import Maria from "./components/Who/Maria";
import Caroline from "./components/Who/Caroline";
import H1 from './components/what/H1';
import FirstLandingPage from './components/landingPage/FirstLandingPage';
import Why from "./components/Why/Why"; 
import Navbar from "./components/Navbar/Navbar"; 
import What from "./components/what/H1";
import LandingPageText from "./components/landingPage/LandPageText";
//import FirstLandingPage from './components/landingPage/FirstLandingPage';



function App() {
  const [cross, setCross] = useState(); 
  return (
    
    <div className="App">
    <Navbar />
    <LandingPageText />
    <What />
    </div>
   
  );
}

export default App;

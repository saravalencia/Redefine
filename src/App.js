import React, {useState} from "react"; 
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Who from "./components/Who/Who";
import WorkedWith from './components/WorkedWith/WorkedWith'
import FirstLandingPage from './components/landingPage/FirstLandingPage';
import Why from "./components/Why/Why"; 
import Navbar from "./components/Navbar/Navbar"; 
import What from "./components/what/What";
import Contact from './components/Contact'


function App() {
  const [cross, setCross] = useState(); 
  return (
    
    <>
    <BrowserRouter>
    <Navbar/>
  <Switch>
    <Route exact path="/">
      <FirstLandingPage/>
      <What/>
  </Route> 
  <Route exact path="/work">
    <WorkedWith/>
  </Route>
  <Route exact path="/contact">
  <Contact/>
  </Route>
  <Route exact path="/who">
  <Who />
  </Route>
  <Route exact path="/why">
  <Why />
  </Route>
</Switch>
  </BrowserRouter>
  
   </>
   
  );
}

export default App;

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
import Luna from "./components/Who/Luna"; 
import Maria from "./components/Who/Maria";
import Caroline from "./components/Who/Caroline";


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
  <Route path="/Luna">
  <Luna />
  </Route>
  <Route path="/Maria">
<Maria />
  </Route>
  <Route path="/Caroline">
  <Caroline />
  </Route>
</Switch>
  </BrowserRouter>
  
   </>
   
  );
}

export default App;

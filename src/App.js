import React,{useState} from "react"; 
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; 
import Who from "./components/Who/Who";
import Luna from "./components/Who/Luna"; 
import Maria from "./components/Who/Maria";
import Caroline from "./components/Who/Caroline";
import { Navbar } from "./components/Navbar/Navbar";
import { Links, animateScroll as scroll } from "react-scroll";

function App() {
  const [cross, setCross] = useState(); 
  return (
    <div className="App">
  <Router>
    <Navbar/>
    <Link to="/who"></Link>
  <Switch>
    <Route path="/Who">
    <Who />
    </Route>
    </Switch>
    </Router>
    </div>
  );
}

export default App;

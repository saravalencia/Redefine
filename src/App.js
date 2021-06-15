import React,{useState} from "react"; 
import './App.css';
import Who from "./components/Who/Who";
import Luna from "./components/Who/Luna"; 
import Maria from "./components/Who/Maria";
import Caroline from "./components/Who/Caroline";
import { Navbar } from "./components/Navbar/Navbar";
function App() {
  const [cross, setCross] = useState(); 
  return (
    <div className="App">
    <Navbar/>
     <Who />
     <Luna />
     <Maria/>
     <Caroline />
    </div>
  );
}

export default App;

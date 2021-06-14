import React from "react"; 
import './App.css';
import Who from "./components/Who/Who";
import Luna from "./components/Who/Luna"; 
import Maria from "./components/Who/Maria";
import Caroline from "./components/Who/Caroline";

function App() {
  return (
    <div className="App">
     <Who />
     <Luna />
     <Maria/>
     <Caroline />
    </div>
  );
}

export default App;

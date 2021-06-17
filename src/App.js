import React, { useState } from "react"; 
import './App.css';

import { Navbar } from "./components/Navbar/Navbar";
import Why from './components/Why'
function App() {
  const [cross, setCross] = useState(); 
  return (
    <div className="App">
      <Navbar/>
      <div className="why-section">
        <Why />
      </div>
    </div>
  );
}

export default App;

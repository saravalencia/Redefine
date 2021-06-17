import React from "react"; 
import "./Who.css"
import { MdEmail } from 'react-icons/md';
import {FaPhoneAlt} from "react-icons/fa";
import {AiFillLinkedin} from "react-icons/ai"; 

const Maria = () =>{
    return (
<div className="maria-whole-container">
<h1 className="title-name">WHO IS MARIA?</h1>
    <div className="maria-container">
        <img className="Maria" id="Maria" src="../images/Maria.jpg" />
        <p className="info-text">IT systems & performance design
<br />
<br />
Maria har en  Bachelor i Informations og Performance Design fra Roskilde Universitet. Hun har erfaring med urban design, installations design og system design. Maria er en passioneret designer, der søger en mere bæredygtig og kunstnerisk verden. 
<br />
<br/>
<span className="text-bold">Stilling</span>
<br/>
<br/>
<span className="text-bold">Funfact</span></p>
    </div>
    <div className="info-container2">
    <p><MdEmail/>mander20@student.aau.dk</p>
                <p><FaPhoneAlt/>+(45) 22 18 56 15</p>
                <p><AiFillLinkedin/>https://www.linkedin.com</p>
        </div>
    </div>
    ); 
}

export default Maria; 
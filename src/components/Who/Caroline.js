import React from "react"; 
import "./Who.css";
import { MdEmail } from 'react-icons/md';
import {FaPhoneAlt} from "react-icons/fa";
import {AiFillLinkedin} from "react-icons/ai"; 


const Caroline = () => {
    return (
        <div className="caroline-whole-container">
            <h1 className="caroline-title">WHO IS CAROLINE?</h1>
            <div className="caroline-container">
                <img className="Caroline" id="Caroline"src="../images/Caroline.jpg" />
                <p className="caroline-text">Design & Business + Advertising
<br />
<br />
Caroline har en Bachelor i Design & Business, og har derudover en uddannelse indefor reklame. Hun har derudover arbejdet i diverse forskellige kreative jobs med fokus på marketing, brugeroplevelser/UX... Noget med Advice opgaver. Hun har øje for detaljen og bruger sit kreative mindset til at redefinere og løse problemer. 
<br />
<br />
<span className="text-bold">Stilling</span>
<br />
<br />
<span className="text-bold">Funfact</span></p>
                </div>
                <div className="info-container-caroline">
                <p><MdEmail/>caroline.haakonsen@live.dk </p>
                <p><FaPhoneAlt/>+(45) 26 55 41 11</p>
                <p><AiFillLinkedin/>https://www.linkedin.com</p>
                </div> 
            </div>
    )
}

export default Caroline; 
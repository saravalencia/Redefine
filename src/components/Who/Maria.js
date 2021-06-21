import React from "react"; 
import "./Who.css"
import { MdEmail } from 'react-icons/md';
import {FaPhoneAlt} from "react-icons/fa";
import {AiFillLinkedin} from "react-icons/ai"; 
import Styled from "styled-components";
const Maria = () =>{

    const MariaWholeContainer = Styled.div`
    margin-top: 500px;
    `; 

    const TitleName = Styled.h1` 
    font-family: "Arial Black"; 
    font-size: 48px; 
    color: #000AFF; 
    padding-left: 30%; 
   @media (max-width: 734px) {
   padding-left: 00%; 
  }
    `;

    const MariaContainer = Styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap; 
    width: 100%;
    `; 

    const Infotext = Styled.p`
    text-align: justify;
    width: 50%;
    `; 

    const InfoContainer2 = Styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap; 
    position: relative; 
    top: 100px;
    margin: auto; 
    width: 65%; 
    `; 

    return (
<MariaWholeContainer>
<TitleName>WHO IS MARIA?</TitleName>
<MariaContainer>
        <img className="Maria" id="Maria" src="../images/Maria.jpg" />
        <Infotext className="info-text">IT systems & performance design
<br />
<br />
Maria har en  Bachelor i Informations og Performance Design fra Roskilde Universitet. Hun har erfaring med urban design, installations design og system design. Maria er en passioneret designer, der søger en mere bæredygtig og kunstnerisk verden. 
<br />
<br/>
<span className="text-bold">Stilling</span>
<br/>
<br/>
<span className="text-bold">Funfact</span></Infotext>
 </MariaContainer>
    <InfoContainer2>
    <p><MdEmail/>mander20@student.aau.dk</p>
                <p><FaPhoneAlt/>+(45) 22 18 56 15</p>
                <p><AiFillLinkedin/>https://www.linkedin.com</p>
       </InfoContainer2>
    </MariaWholeContainer>
    ); 
}

export default Maria; 
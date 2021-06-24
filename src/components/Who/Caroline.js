import React from "react"; 
import "./Who.css";
import { MdEmail } from 'react-icons/md';
import {FaPhoneAlt} from "react-icons/fa";
import {AiFillLinkedin} from "react-icons/ai"; 
import Styled from "styled-components"; 

const CarolineWholeContainer = Styled.div`
margin-top: 0px;
padding-top: 10%; 
padding-bottom: 0px; 
background-color:#97A090; 
height: 100vh; 
`; 

const CarolineTitle = Styled.h1`
font-family: "Arial Black"; 
      font-size: 48px; 
      color: #000AFF; 
      padding-left: 30%; 
      @media (max-width: 734px) {
         padding-left: 00%; 
        }
`;

const CarolineContainer= Styled.div`
      display: flex; 
      justify-content: space-evenly;
      width: 100%;
      margin: auto;
      flex-wrap: wrap; 
`; 

const CarolineText = Styled.p `
text-align: justify;
width: 50%;
`;

const InfoContainerCaroline = Styled.div`
display: flex;
justify-content: space-evenly;
flex-wrap: wrap; 
position: relative; 
top: 100px;
margin: auto; 
width: 65%; 
`; 

const Caroline = () => {
    return (
        <CarolineWholeContainer>
            <CarolineTitle>WHO IS CAROLINE?</CarolineTitle>
           <CarolineContainer>
                <img className="Caroline" id="Caroline"src="../images/Caroline.jpg" />
                <CarolineText>Design & Business + Advertising
<br />
<br />
Caroline har en Bachelor i Design & Business, og har derudover en uddannelse indefor reklame. Hun har derudover arbejdet i diverse forskellige kreative jobs med fokus på marketing, brugeroplevelser/UX... Noget med Advice opgaver. Hun har øje for detaljen og bruger sit kreative mindset til at redefinere og løse problemer. 
<br />
<br />
<span className="text-bold">Stilling</span>
<br />
<br />
<span className="text-bold">Funfact</span></CarolineText>
               </CarolineContainer>
               <InfoContainerCaroline>
                <p><MdEmail/>caroline.haakonsen@live.dk </p>
                <p><FaPhoneAlt/>+(45) 26 55 41 11</p>
                <p><AiFillLinkedin/>https://www.linkedin.com</p>
             </InfoContainerCaroline>
           </CarolineWholeContainer>
    )
}

export default Caroline; 
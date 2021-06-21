import React from "react"; 
import "./Who.css"
import Styled from "styled-components"; 
import { MdEmail } from 'react-icons/md';
import {FaPhoneAlt} from "react-icons/fa";
import {AiFillLinkedin} from "react-icons/ai"; 

const Luna = () => {

const H1 = Styled.h1`
font-family: "Arial Black"; 
font-size: 48px; 
color: #000AFF;
text-align:center;
`; 

const Circle = Styled.div`
border-radius: 50%; 
`; 

const LunaWholeContainer = Styled.div`
line-height: 1em; 
margin-top: 300px;
`; 

const LunaTitle = Styled.h1`
font-family: "Arial Black"; 
font-size: 48px; 
color: #000AFF;
padding-left: 30%; 
@media (max-width: 734px) {
   padding-left: 00%; 
  }
`; 

const LunaContainer = Styled.div`
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;
align-items: center;
`;

const LunaText = Styled.p`
width: 50%;
text-align: justify;
`; 

const InfoContainer = Styled.div`
display: flex; 
justify-content: space-evenly;
flex-wrap: wrap; 
position: relative; 
top: 100px;
margin: auto; 
width: 65%; 
`;

const TextBold = Styled.span`
font-weight: bold; 
`; 
 
    return (
       <LunaWholeContainer >
        
       <LunaTitle>WHO IS LUNA?</LunaTitle>
         
            <LunaContainer id="luna">
                   <img className="Luna" src="../images/Luna.jpg" />
                   <LunaText>Service Økonom - Innovation & Entrepreneurship - Service Systems Design 
                   <br />
                   <br/>
Luna har en Bachelor i Innovation & Entreprenørskab, specialiseret i event management. Hun har arbejdet med system design, performance design og teambuilding. Derudover har hun arbejdet i servicefaget som blandt andet fitness instruktør i 8 år. 
<br />
<br />

Luna’s spidskompetencer er projektledelse samt at arbejde i tæt kontakt med mennesker. 
<br />
<br />
<span className="text-bold"> Stilling </span >
<br />
<br />
<span className="text-bold">Funfact</span>
<br/>
<br/>
Luna var 500 meter fra at løbe et halvmarathon. </LunaText>
             </LunaContainer>
               <InfoContainer>
                <p><MdEmail/>lberli20@student.aau.dk</p>
                <p><FaPhoneAlt/>+(45) 22 37 74 10</p>
                <p><AiFillLinkedin/>https://www.linkedin.com/in/luna-berlin-752787127</p>
             </InfoContainer>
                    
    </LunaWholeContainer > 
    )
}

export default Luna; 
import React from "react"; 
import Styled from "styled-components";
import Luna from "./Luna";  
import Maria from "./Maria";  
import Caroline from "./Caroline";  
import "./Who.css"; 
import { Link as Links, animateScroll as scroll } from "react-scroll";
import { MdEmail } from 'react-icons/md';
import {FaPhoneAlt} from "react-icons/fa";
import {AiFillLinkedin} from "react-icons/ai"; 

const Who = () => {
    
    const H1 = Styled.h1`
    font-family: "Arial Black"; 
    font-size: 48px; 
    color: #000AFF; 

    `; 
    

    const Paragraph = Styled.p`
    font-family: "Roboto"; 
    font-size: 36px; 
    `; 
   
  

    const ContainerFlex = Styled.div`
     width: 100%; 
     display:flex; 
     justify-content: space-around;     
    `; 

    const FlexText = Styled.p`
     line-height: 29,74px; 
     
    `; 
    

    return (
<div class="Who" >
     <H1>
    <h1>WHO ARE WE?</h1>
    </H1>
    <Paragraph>
     <p>General text about us as service designers... Our values, mission</p>
     </Paragraph>
    <div className="image-container">
    
  <div className="image lunis">
  <Links
    activeClass="active"
    to="Luna"
    spy={true}
    smooth={true}
    offset={-170}
    duration={800}
>
      <img className="Luna-Berlin size" src="../images/Luna.jpg" alt="Luna Berlin" /> 
     
     <p className="height">LUNA BERLIN <br /> SCRUM MASTER & WORKSHOP LEAD</p>
     </Links>
 </div>
 <div className="image">
 <Links
    activeClass="active"
    to="Maria"
    spy={true}
    smooth={true}
    offset={-250}
    duration={800}
>
      <img className="Maria-Højgaard size" src="../images/Maria.jpg" alt="Maria Højgaard"/>
     
    <p className="height">MARIA HØJGAARD <br />UX CONSULTANT & CLIENT MANAGER </p>
    </Links>
</div>
<div className="image">
<Links
    activeClass="active"
    to="Caroline"
    spy={true}
    smooth={true}
    offset={-300}
    duration={800}
>
      <img className="Caroline-Haakonson size" src="../images/Caroline.jpg" alt="Caroline Haakonson"/>
      <p className="height">CAROLINE HAAKONSEN <br />UX CONSULTANT & DESIGN LEAD</p>
      </Links>
    </div>
   </div>
<Luna />
<Maria /> 
<Caroline /> 
    </div>
    
    );
}

export default Who; 
 




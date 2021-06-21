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

    const Image = Styled.div`
    width: 20%; 
    min-width: 250px; 
    text-align: center;
    margin-bottom: 0px; 
    `; 

    const ImageContainer = Styled.div`
    display:flex;
    flex-wrap: wrap; 
    justify-content: space-evenly; 
    margin-top: 10%; 
    `; 

    const Height = Styled.p`
    line-height: 20px;
    font-weight: Bold; 
    width: 100%;
    `; 


    return (
<div class="Who" >
     <H1>WHO ARE WE?</H1>
    <Paragraph>
     General text about us as service designers... Our values, mission
     </Paragraph>
    <ImageContainer>
<Image>
  <Links
    activeClass="active"
    to="Luna"
    spy={true}
    smooth={true}
    offset={-170}
    duration={800}
>

    <img className="Luna-Berlin size"  alt="Luna Berlin" src="../images/Luna.jpg"/>
 
 <Height>LUNA BERLIN <br /> SCRUM MASTER & WORKSHOP LEAD</Height>
     </Links>
</Image>
<Image>
 <Links
    activeClass="active"
    to="Maria"
    spy={true}
    smooth={true}
    offset={-250}
    duration={800}
>
      <img className="Maria-Højgaard size" src="../images/Maria.jpg" alt="Maria Højgaard"/>
     
   <Height>MARIA HØJGAARD <br />UX CONSULTANT & CLIENT MANAGER </Height>
    </Links>
</Image>
<Image>
<Links
    activeClass="active"
    to="Caroline"
    spy={true}
    smooth={true}
    offset={-300}
    duration={800}
>
      <img className="Caroline-Haakonson size" src="../images/Caroline.jpg" alt="Caroline Haakonson"/>
      <Height>CAROLINE HAAKONSEN <br />UX CONSULTANT & DESIGN LEAD</Height>
      </Links>
    </Image>
 </ImageContainer>
<Luna />
<Maria /> 
<Caroline /> 
    </div>
    
    );
}

export default Who; 
 




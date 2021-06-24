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
import {BrowserRouter as Router , Link, Redirect, useHistory, Route, Switch} from "react-router-dom"; 


const Who = (props) => {



    
    const H1 = Styled.h1`
    font-family: "Arial Black"; 
    font-size: 48px; 
    color: #FEE476; 
    position: relative; 
    

    `; 
    

    const Paragraph = Styled.p`
    font-family: "Roboto"; 
    font-size: 36px; 
    position: relative; 
   
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
    height: 100%; 
    text-align: center;
    margin-bottom: 0px; 
    `; 

    const ImageContainer = Styled.div`
    display:flex;
    flex-wrap: wrap; 
    justify-content: space-evenly; 
    margin-top: 5%; 
    `; 

    const Height = Styled.p`
    line-height: 20px;
    font-weight: Bold; 
    width: 100%;
    `; 

    const HeaderContainer = Styled.div` 
     height:100vh:
     width:100%; 
     display:flex;
     flex-direction: column; 
     justify-content: center; 
     align-items: center;
     padding-top: 7%; 
     padding-bottom: 0px; 
    `; 


    return (
<div class="Who" >

<HeaderContainer>
     <H1>WHO ARE WE?</H1>
    <Paragraph>
     General text about us as service designers... Our values, mission
     </Paragraph>
     </HeaderContainer>
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
<Link to="/Luna">
    <img className="Luna-Berlin size"  alt="Luna Berlin" src="../images/Luna.jpg"/>
    <div className="image-overlay2">
      <p className="text-font">More info</p>
      </div>
</Link>
 <Height><span>Partner & Project Manager</span><br />  LUNA BERLIN </Height>
 
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
<Link to="/Maria">
      <img className="Maria-Højgaard size" src="../images/Maria.jpg" alt="Maria Højgaard"/>
      <div className="image-overlay">
      <p className="text-font">More info</p>
      </div>
   </Link>  
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
<Link to="/Caroline">
      <img className="Caroline-Haakonson size" src="../images/Caroline.jpg" alt="Caroline Haakonson"/>
      <div className="image-overlay3">
      <p className="text-font">More info</p>
      </div>
      </Link>
      <Height>CAROLINE HAAKONSEN <br />UX CONSULTANT & DESIGN LEAD</Height>
      </Links>
    </Image>
 </ImageContainer>

    </div>
    );
}

export default Who; 
 




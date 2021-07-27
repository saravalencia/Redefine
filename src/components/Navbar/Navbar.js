import React, {useState, useEffect, Component} from "react"; 
import styled from "styled-components"; 
import HamburgerMenu from "./Hamburger";
import "../../App.css";
import "./navbar.css";




const Nav = styled.div`
    
width: 100%; 
height: 00px; 
padding: 00px; 
display:flex; 
justify-content: space-between; 
margin: 0px; 



.logo{
    padding: 0px 0;
   
}

.logo-name{
    color: black;
}

.image{
    position: releative; 
    left: 300px;
}

`;

const Logo = styled.h1`

font-size: 1.5em; 
position:fixed;
margin-left: 10px;
margin-top: 1%;
margin-bottom: 0px; 
font-size: 3.3em; 
z-index: 89;
font-family: Arial, Helvetica, sans-serif;
@media (max-width: 700px) {
    font-size: 2.5em; 
}
.logo1{
    color: black;
}

`; 

const SubText = styled.h1`
width: 90%; 
color: white;
text-align: center; 
position:absolute; 

left:5.1%;
font-size: 1.2em; 
.highlight{
    color: #F17D29;
}
`;

const Span = styled.span`
position. relative; 
bottom: 30px;
border-radius: 50%; 
`; 



export function Navbar(props){
return (
    <Nav >
  <div className="logo">
 <Logo> <img src='../Images/logo-redefine.svg' alt='Redefine logo' style={{width:'300px', height: 'auto'}}/></Logo>
 
   {/*<Logo>RE<Span>:</Span><span className="logo1">DEFINE</span></Logo>*/}
</div>
<HamburgerMenu />
 
    </Nav>
)
}

export default Navbar; 
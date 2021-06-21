import React, {useState, useEffect} from "react"; 
import styled from "styled-components"; 
import RightNav from "./Rightnav"; 
import HamburgerMenu from "./Hamburger";
import "../../App.css";

const Nav = styled.div`
width: 100%; 
height: 00px; 
padding: 0 0px; 
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
color: #fff; 
font-size: 1.5em; 
position:fixed;
margin-left: 10px;
margin-top: 10px;
.logo1{
    color: black;
}

`; 

const SubText = styled.h1`
width: 90%; 
color: white;
height: 100vh;
text-align: center; 
position:absolute; 
top:67%; 
left:5.1%;
font-size: 1.2em; 
.highlight{
    color: #F17D29;
}
`;

const Image = styled.img`
posititon: releative; 
right: 30px; 
`;

export function Navbar(props){
return (
    <Nav >
  <div className="logo">
  
  <Logo>
 <h1 className="logo-name">RE<span className="logo1">DEFINE</span></h1>
 </Logo>
 <SubText>

</SubText>

</div>
<HamburgerMenu />
 
    </Nav>
)
}

export default Navbar; 
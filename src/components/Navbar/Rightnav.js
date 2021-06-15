import React from "react"; 
import styled from "styled-components"; 

const Ul = styled.ul`
    list-style:none; 
    display:flex; 
    flex-flow: column nowrap; 
    margin:0;
    }
    
li{
    padding: 0px 0px; 
    color: #fff; 
    margin-left: 1%;
    margin-top: 0px;
    font-family: "Arial black"; 
    font-size: 38px;  
    color: #FFC9D6;
    position: relative;
    top:170px;
    line-height: 100px;
  

    &:hover{
        transition: transform 0.25s ease-out;
    }
  
}

a{
    text-decoration: none;
    color: #F17D29;
      &:hover{
        color: #028194; 
        font-size: 39px;
        
      }
}


@media (min-width:515px){
    font-size: 50px; 
}

@media (max-width:1780px) {
 flex-flow: column nowrap;
 background-color: #000AFF; 
 position: fixed; 
 transform: ${({open}) => open ? "translateX(0)" : "translateX(100%)"}; 
 top: 0; 
 right: 0; 
 height: 100vh; 
 width: 500px; 
 padding-top: 4.5; 
 transition: transform 0.5s ease-in-out;
 z-index: 1;
}

`;


const RightNav = ({open}) => {
return (
    <Ul open={open}>
    <li><a href="/home">WHAT?</a></li>
        <li><a href="/why">WHY?</a></li>
        <li><a href="/work">WORK?</a></li>
        <li><a href="/who">WHO?</a></li>
        <li><a href="/contact">CONTACTS</a></li>
        </Ul>
)
} 

export default RightNav; 
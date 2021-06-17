import React, {useState, useContext, useEffect} from "react";
import styled from "styled-components";
import RightNav from "./Rightnav"; 
import Navbar from "./Navbar"; 

const StyledBurger = styled.div`
  width: 5rem; 
  height; 5rem; 
  position: fixed; 
  top: 20px; 
  right 20px;
  display: flex; 
  justify-content: space-around; 
  flex-flow: column nowrap;
  z-index: 20;
  

   

  .invis{
    width: 35px;
    height: 3px;
    margin: 6px 0;
    visibility: hidden;
  }
  
  div{
      width; 2rem; 
      height: 0.5rem; 
      background-color:${({open}) => open ? "#ccc" : "#333"}; 
      border-radius: px; 
      margin-top: 10px;
      transform-origin: 1px; 
      transition: all 0.3s linear;
      background-color: red; 
      
&:nth-child(1){
    transform: ${({ open }) => open ? " rotate(45deg) translate(-4.2px, 6px)" : "rotate(0deg)" };
   
}

&:nth-child(3){
    transform: ${({ open }) => open ? " translateX(100%)" : "translate(0deg)" };
   
}

&:nth-child(3){
    transform: ${({ open }) => open ? "rotate(-45deg) translate(-25px, 10px) " : "rotate(0)" }; 
}
  }

`;

const HamburgerMenu = ({Navbar}) => {
    const [open, setOpen] = useState(false);

    return (
        <>
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div /> 
        <div className="invis"/>
        <div  />
        
     </StyledBurger>
     <RightNav open={open}/>
     </>
    )
    
    }
    
    export default HamburgerMenu; 
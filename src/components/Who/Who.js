import React from "react"; 
import Styled from "styled-components"; 
import "../../App.css"; 
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
    display: flex; 
    flex-direction: column; 
    `; 
     

    return (
<div>
     <H1>
    <h1>WHO ARE WE?</h1>
    </H1>
    <Paragraph>
     <p>General text about us as service designers... Our values, mission</p>
     </Paragraph>
    <div className="image-container">
  <div className="image">
      <img className="Luna-Berlin size" src="../images/Luna.jpg" /> 
     <p>Luna</p>
 </div>
 <div className="image">
      <img className="Maria-Højgaard size" src="../images/Maria.JPG" />
      <p>Maria Højgaard</p>
</div>

<div className="image">
      <img className="Caroline-Haakonson size" src="../images/Caroline.jpg" />
      <p className="pos">Caroline</p>
    </div>
   
   </div>

       
    </div>
    );
}

export default Who; 





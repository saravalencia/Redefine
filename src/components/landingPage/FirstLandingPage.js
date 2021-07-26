import React, { useState } from 'react';
import styled, {css} from "styled-components";
import ImgBck from "./image/BackgroundHow.svg"
import ImgFirst from "./image/Frontpage.png"
import Background4 from "./image/Background4.svg"



const FirstSection = styled.div`
width: 100%;
height: 100vh;
background-image: url(${ImgFirst}) ;
background-size: cover;
background-position-x: center;
    background-position-y: center;

`;

const SecondSection = styled.div`
width: 100%;
height: 100vh;
margin-bottom: 0px; 
margin-top: 0px; 
display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-start;
    align-items: flex-end;


div {
    width: 40%;
    height: auto; 
    display: flex;
    flex-direction: column; 
    position: absolute;               
    top: 120%; 
    margin-left: 8em ;
    right: 10%;
    @media (max-width: 770px){
       
        width: 80%;
}
}

`;

const ThirdSection = styled.div`
width: 100%;
height: 100vh;
background-image: url(${ImgBck}) ;
background-repeat: no-repeat;
background-size: cover;
display: flex;
flex-wrap: wrap;
justify-content: flex-end;

div {
    width: 40%;
    display: block;
    position: absolute;               
    top: 220%; 
    padding-right: 5em;
    display: flex;
    flex-direction: column;
    align-content: center;
    flex-wrap: wrap;
    @media (max-width: 770px){
  top: 210%;
}

}

h2 {
    width: 30em;
    height: 10em;
    margin: none;
position: relative;
right: 60%;
text-align: center;
font-size: 3em;
font-family: Arial Black, Helvetica, sans-serif;
letter-spacing: 2px;
line-height: 2em;
color: #000;
font-weight: 800;
@media (max-width: 770px){
  font-size: 2em;
  width: 16em;
  right: 40%;
}

}
span{
    color: #fff;
}

`
const FourthSection = styled.div`
width: 100%;
height: 100vh;
display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-end;
    justify-content: flex-end;
    align-items: center;

div {
    width: 40%;
    display: block;
    position: absolute;               
    top: 315%; 
    margin-left: 9em ;
    margin-bottom: 0px; 
    @media (max-width: 770px){
  margin-left: 0%;
}
    
   
}
h2 {
    font-family: 'Roboto', sans-serif;
font-size: 4em;
color: #000AFF;

padding-bottom: 1em;
@media (max-width: 770px){
   font-size: 2.5em;
  
}
   
}

`;

const FifthSection = styled.div`
width: 100%;
height: 100vh;
background-image: url(${Background4}) ;
background-repeat: no-repeat;
background-size: cover;
@media (max-width: 770px){
   display:none ;
}

`
const SixthSection = styled.div`
width: 100%;
height: 110vh;
display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    align-items: center;

    h2{
        width: 90vh;
        font-family: 'Arial Black', sans-serif;
font-size: 3em;
color: #000AFF;
text-align: center;
@media (max-width: 770px){
   font-size: 2em;
   width: 100%;
}

    }

    p{ 
        width: 80%;
        height: 10em;
        margin-top: 0px;
        margin-bottom: 0px;  
       
       
    }
`

const H1 = styled.h1`
margin: none;
position: absolute;
transform: translate(0, -60%);
top: 40%;
left: 23%;
margin: 2em;
font-size: 3.5em;
font-family:  'Roboto', sans-serif;
letter-spacing: 2.8px;
line-height: 1.5em;
color: #000AFF;
@media (max-width: 770px){
  left: 0%;
}

span { 
    color: #526256;
}



`;

const H2 = styled.h2`
font-family: 'Arial Black';
font-size: 3.8em;
color: #000AFF;
margin-bottom: 0px; 
@media (max-width: 770px){
   font-size: 3em;
}

`;


const P = styled.p`
text-align: justify;
line-height: 1.8em;
font-size: 1.2em;
font-family: 'SF UI';
@media (max-width: 770px){
   font-size: 0.9em;
}

`;
const Img = styled.img`
position: static; 
margin-left: 10%; 
margin-top: 15%;
top: 30%;
left: 15%;
@media (max-width: 770px){
   display: none;
}

`;
const Img2 = styled.img`
width: 100vh;
padding-bottom: 2em;
@media (max-width: 770px){
  width: 80%;
}
`;






function How(open) {

    return (
    
        <div className='containerHow'>
      
            <FirstSection>
               
                <H1 > 
                   Changing the ordinary
                </H1>
            </FirstSection>
            <SecondSection>
            
                <div>
                <H2>Design derskaber værdi</H2>
                <P>Vi udvikler værdiskabende løsninger indenfor brugerdreven innovation og Service Design.

RE:DEFINE er et fremtidsfokuseret designbureau, som kan hjælpe din virksomhed med udvikling af både digitale og fysiske designløsninger for at øge dine kunders serviceoplevelse. Med den nyeste viden indenfor serviceorienteret, systembaseret og brugercentreret design tilbyder vi designrådgivning, workshop facilitering, konceptudvikling af innovative løsninger samt optimering af eksisterende processer og interessent-netværk.

Da vores arbejde i høj grad er feltbaseret, er vi klar til at møde jer, der hvor I er.  </P>
</div>
<Img src="../images/image1.svg"/>

 </SecondSection>
<ThirdSection>
   
<div>
     <h2>WE PUT <span>HUMANS FIRST</span> , AS WE BELIEVE THAT THE GREATEST <span>SOLUTIONS</span>  COMES FROM <span>CO-CREATING</span> , NOT ONLY WITH THE CLIENT, BUT BY <span>COLLABORATING WITH STAKEHOLDERS AND THE USERS </span>WITHIN THE PROJECT <span>ECOSYSTEM.</span> </h2>
         
</div>

</ThirdSection>
<FourthSection>
    
<div>
                <H2>Rådgivning og konceptudvikling</H2>
                <P>Vi tror på at fremtidens værdi skabes ved at redefinere hvad vi ved om nutidens værdibehov. I vores hurtigt udviklende verden er værdiskabelse stærkt forbundet med serviceoplevelse og ressourceforbrug.  </P>
                <P>Service Design er en forholdsvis ny disciplin indefor design, som fokuserer på at finde kreative og værdiskabende løsninger til uhåndgribelige problemstillinger. Ved at anvende viden og metoder indenfor Service Design, skaber vi værdi for dine processer og produkter med henblik på at styrke værdikonstellationen mellem dig og dine eksisterende og potentielle partnere. 

Sammen indgår vi i en kreativ process, der udvælges og tilpasses til dine behov.
  </P>
</div>

</FourthSection>
<FifthSection/>
<SixthSection>
    <h2>Vi finder ind til roden af dine problemer og vender dem til nye muligheder.</h2>
    <Img2 src="../images/graph.png"/> 
    <P>Vores designproces trækker på den udbredte tilgang, Design Thinking. Denne tilgang er ligeledes representeret gennem den klassiske Double Diamond, som vi har draget inspiration fra i vores proces model nedenfor. Sammen med erfaring og viden indenfor både digitalt, urbant og oplevelsesøkonomisk design skaber vi en proces, der er rettet mod at skabe stærke og værdifulde løsninger ud fra dine behov.</P>
</SixthSection>




            </div>



        )
    }
  
    export default How

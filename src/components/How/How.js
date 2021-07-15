import React from 'react';
import styled, {css} from "styled-components";
import ImgBck from "./image/BackgroundHow.svg"


const FirstSection = styled.div`
width: 100%;
height: 100vh;
background-color: #97A090;

`;

const SecondSection = styled.div`
width: 100%;
height: 100vh;
display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-end;
    justify-content: flex-end;


div {
    width: 40%;
    display: block;
    position: absolute;               
    top: 120%; 
    margin-left: 9em ;
    
   
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


div {
    width: 40%;
    display: block;
    position: absolute;               
    top: 315%; 
    margin-left: 9em ;
    
   
}
h2 {
    font-family: 'Roboto', sans-serif;
font-size: 4em;
color: #EE6C4D;
width: 120vh;
padding-left: 3em;
padding-bottom: 1em;
   
}

`;


const H1 = styled.h1`
margin: none;
position: absolute;
transform: translate(0, -60%);
top: 40%;
margin: 2em;
font-size: 2.8em;
font-family: Arial, Helvetica, sans-serif;
letter-spacing: 2px;
line-height: 1.5em;
color: #FEE476;

span { 
    color: #526256;
}



`;

const H2 = styled.h2`
font-family: 'Roboto', sans-serif;
font-size: 3.8em;
color: #EE6C4D;




`;


const P = styled.p`
text-align: justify;
line-height: 1.8em;
font-size: 1em;
font-family: Arial, Helvetica, sans-serif;

`;
const Img = styled.img`

`;
const Img2 = styled.img`
position: relative;
left: -57%;
`;
const Img3 = styled.img`
position: relative;
bottom: 25%;
right: 13vh;

`;





function How() {
    return (
    
        <div className='containerHow'>
            <FirstSection>
               
                <H1> 
                    <span>USING THE</span> SERVICE DESIGN <span>APPROACH</span> 
                    ENABLES <span>US TO GET TO</span> KNOW THE REAL PROBLEM,
                     EMPATHIZE WITH THE USERS <span>AND</span> 
                     INVOVLE RELEVANT STAKEHOLDERS.  
                </H1>
            </FirstSection>
            <SecondSection>
            
                <div>
                <H2>Ecosystems & maps </H2>
                <P>Hos RE:DEFINE går vi os umage for at skabe brugbarer og visuelle præsentationer af processer og koncepter. Disse modeller anvendes ofte til at skabe gennemsigtighed mellem forskellige brugerrejser, systemer, workflow processer og aktører. Vores metoder indebærer blandt andet kortlægning af ecosystems, service blueprints og user journeys. 

Et ecosystem map er en forlængelse af et stakeholders map og fokuserer på at designe for service’s og prioriterer ikke mindst slut resultatet af designet højt, men også forholdene der skaber værdi for brugeren. 

Et Service Blueprint hjælper med at få et overblik over både fysiske ressourcer og de uhåndgribelige ressourcer, såsom kompetencer og data, som de involverede interessenter bringer til den givne virksomhed/service. Blueprints er dermed gode til at give et overblik over hvem og hvad der skaber værdi samt hvordan de gør det. 

Vi anvender en række forskellige strategier og visuelle metoder alt efter hvad den givne sag har behov for. vil de komme i spil for at struktureret værdikæden.

RE:DEFINE benytter sig af ecosystems og en række udvalgte kortlægnings metoder til at strukturere værdikæder og brugeroplevelser for at kunne optimere din virksomhed. </P>
</div>
<Img src="../images/image1.svg"/>

 </SecondSection>
<ThirdSection>
   
<div>
                <H2>Preto-, Prototyper & Test af koncept </H2>
                <P>Udførelse af pretotypes og prototyper samt test af koncepter er en stor del af RE:DEFINE’s metode. Preto- og prototyper kan være både fysiske og digitale løsninger.

RE:DEFINE anvender især design sketching som metoder. Herunder udvikler vi video og animations baseret sketching for at kreere en visuel forståelse af mange forskellige mulige virkelige koncepter. Formålet er at skabe realistiske scenarier for en ny mulig fremtid.

Hos RE:DEFINE testes et koncept flere gange med diverse interessenter inklusiv brugerne.  Dette sker ved hjælp af workshops, eksperimenter, surveys og dybdegående interviews. </P>
</div>

<Img2 src="../images/imageLeft.svg"/>

</ThirdSection>
<FourthSection>
    
<div>
                <h2>Empathizing with the users</h2>
                <P>liquam neque, aliquam scelerisque quis. Ac vivamus dui diam eu tincidunt imperdiet tristique sodales mauris. At pulvinar pellentesque eu amet. Tortor massa a dictum cursus gravida. Diam mauris, commodo sed tristique etiam. Cras at netus consequat risus, sed consectetur non cursus mauris. Et eleifend urna diam, tempor nisl tempor adipiscing aenean enim. Euismod proin amet, congue tellus justo risus vitae et. Sed libero malesuada s eget in proin. Vulputate ut risus tempus auctor semper pellentesque viverra ac id. Enim ultrices neque, a orci sed porttitor sed. Fusce nam cras a fusce ac turpis mauris lobortis mattis. At auctor malesuada congue lectus et lacinia mi, nisl. Semper diam mauris commodo pretium volutpat. Rutrum est massa risus, faucibus eu augue venenatis. Facilisis ullamcorper elit dignissim non ornare sit ultrices. Nisi in eget eu scelerisque aenean ultricies feugiat. In consectetur volutpat mi enim, tellus eu fermentum nulla mauris. Commodo, quis nibh arcu ipsum ac amet. Tristique nisi tortor massa et  </P>
</div>
<Img3 src="../images/img3.svg"/>

</FourthSection>


            </div>



        )
    }
  
    export default How
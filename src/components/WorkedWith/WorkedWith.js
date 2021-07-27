import React from 'react';
import Container from '../atoms/Container'
import Div from '../atoms/Div'
import DivContainer from '../atoms/DivContainer'
import H1 from '../atoms/H1'
import P from '../atoms/P'
import ImageDiv from '../atoms/ImageDiv'
import pic1 from './images/pic1.png'
import pic2 from './images/pic2.png'
import H2 from '../atoms/H2'
import styled from "styled-components";

const ImageDiv2 = styled.img`
position: relative;
width: 21.875em;
height: 50em;
max-width: 400px;
max-height: 200px;
cursor: pointer;
@media (max-width: 700px){
   display:none ;
}

`;

const H22 = styled.h2`

text-align : center;
font-size : 1em;
display: flex;
flex-direction: row;
position: relative;
justify-content: space-evenly;
margin-top: 1.5em;
line-height: 1.5em;
text-align: justify;
font-family: Arial, Helvetica, sans-serif;
@media (max-width: 700px){
   display:none ;
}
`


function WorkedWith() {
    return (
      
      <Container>
          <H1 stylingWorked>Vores tidligere projekter</H1>
          <DivContainer>
          <Div>
            <ImageDiv src={pic1}/>
                <H2 stylingWorked>Kultur <br/> distriktet</H2>
                <P stylingWho>I samarbejde med Kultur Distriktet skabte vi nye muligheder for interaktion og fællesskab for borgerne på Østerbro. Projektet forløb over 4 måneder i 2020. Metoderne anvendt inkluderede co-creation, gamification samt Service Design</P>
          </Div>
          <Div>
          <P stylingWho2>I samarbejde med Kultur Distriktet skabte vi nye muligheder for interaktion og fællesskab for borgerne på Østerbro. Projektet forløb over 4 måneder i 2020. Metoderne anvendt inkluderede co-creation, gamification samt Service Design</P>
              <ImageDiv2 src={pic2}/>
              <H22 stylingWorked>Kultur <br/> distriktet</H22>
             
          </Div>
          </DivContainer>
         
            {/* <Video src={video} autoPlay controls loop type='video/mp4'></Video> */}
          
      </Container>

      
    );
  }
  
  export default WorkedWith;
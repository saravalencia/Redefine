import React, { Fragment } from 'react'
import Styled from "styled-components"; 



function Why() {
  const Section = Styled.div`
    margin-top: 60px;
    text-align: center; 
  `;
  const Container = Styled.div`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    @media (min-width: 1200px)

  `
  const Row = Styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
  `
  const H1 = Styled.h1`
    color: #000AFF;
    height: 68px;
    width: 569px;
    font-family: Arial Black;
    font-size: 48px;
    font-style: normal;
    font-weight: 900;
    line-height: 68px;
    letter-spacing: 0em;
    text-align: center; 
    margin: 0 auto; 
    
    `; 
  const H2 = Styled.h2`
    margin: 60px 0; 
    text-align: center; 
  `; 
  const Column = Styled.div`
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    /* flex: 0 0 33.3333333333%; */
    max-width: 33.3333333333%;
  `
  const Img1 = Styled.img`
      border-radius:50% !important;
      background-size: cover;
      background-image: url("./sc1.png");
  `;
  const Img2 = Styled.img`
      border-radius:50% !important;
      background-size: cover;
      background-image: url("./sc2.png");
  `;
  const Img3 = Styled.img`
  border-radius:50% !important;
  background-size: cover;
  background-image: url("./sc3.png");
`;

    return (
        <Fragment>
          <Section >
            <H1 > WHY DOES IT WORK</H1>
            <H2>Using the service design approach enables us to</H2>
            
            <Container >
              <Row>
                    <Column>
                        <Img1 src="../images/sc1.png" className="sc1" />
                        <H2>Ecosystem Maps</H2>
                      <p>Service Ecosystems er en forlængelse af et stakeholders map og fokuserer på at designe for service’s og ikke på slut resultatet af designet, men forholdene der skaber værdi for brugeren. Et Ecosystem hjælper med at få et overblik over både fysiske ressourcer og de uhåndgribelige ressourcer som kompetencer og viden, som de involverede interessenter bringer til den givne virksomhed/service. 
Det vil sige at Ecosystem’s er med til at give et overblik over hvem og hvad der skaber værdi og hvordan de gør det. 

Der findes en del forskellige Ecosystems og alt efter hvad en given virksomhed har behov for, vil de komme i spil for at struktureret værdikæden. 

Derfor benytter RE:DEFINE sig af Ecosystems for at optimere din virksomhed. </p>
                    
                    </Column>

                    <Column>
                        <Img2 src="../images/sc2.png" className="sc2.png" />
                        <H2>Emphatizing with the users</H2>
                      <p>liquam neque, aliquam scelerisque quis. Ac vivamus dui diam eu tincidunt imperdiet tristique sodales mauris. At pulvinar pellentesque eu amet. Tortor massa a dictum cursus gravida. Diam mauris, commodo sed tristique etiam. Cras at netus consequat risus, sed consectetur non cursus mauris. Et eleifend urna diam, tempor nisl tempor adipiscing aenean enim. Euismod proin amet, congue tellus justo risus vitae et. Sed libero malesuada s eget in proin. Vulputate ut risus tempus auctor semper pellentesque viverra ac id. Enim ultrices neque, a orci sed porttitor sed. Fusce nam cras a fusce ac turpis mauris lobortis mattis. At auctor malesuada congue lectus et lacinia mi, nisl. Semper diam mauris commodo pretium volutpat. Rutrum est massa risus, faucibus eu augue venenatis. Facilisis ullamcorper elit dignissim non ornare sit ultrices. Nisi in eget eu scelerisque aenean ultricies feugiat. In consectetur volutpat mi enim, tellus eu fermentum nulla mauris. Commodo, quis nibh arcu ipsum ac amet. Tristique nisi tortor massa et </p>
                    </Column>


                    <Column>
                        <Img3 src="../images/sc3.png" className="sc3.png"   />
                        <H2>Preto-, Prototyper &amp; Test af Koncept</H2>
                      <p>Proto/pretotyper og test af koncepter er en stor del af RE:DEFINE’s metode. Proto- og pretotyper kan være både fysiske og digitale løsninger. 

RE:DEFINE anvender især video og animations baseret sketching for at kreere en visuel forståelse af mange forskellige mulige virkelige koncepter. Formålet er at skabe realistiske scenarier for en ny mulig fremtid.

Hos RE:DEFINE testes et koncept flere gange med diverse interessenter inklusiv brugerne.  Dette sker ved hjælp af workshops, surveys og dybdegående interviews.</p>
                      
                    </Column>
              </Row>
            </Container>
          </Section>
        </Fragment>
    )
}

export default Why;

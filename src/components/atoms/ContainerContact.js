import styled from "styled-components";

const ContainerContact = styled.div`
 margin: 90px auto;
  width: 170vh;
  position: relative;
  height: 80vh;
  display: flex;
  
  @media screen and (max-width: 600px), screen and (max-height: 700px) { 
            font-size: 1em;
            flex-direction: column;
            width: 100vh;
            }


`;

export default ContainerContact  
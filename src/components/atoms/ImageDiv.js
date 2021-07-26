import styled from "styled-components";


const Image = styled.img`
position: relative;
width: 21.875em;
height: 50em;
max-width: 400px;
max-height: 200px;
cursor: pointer;
@media (max-width: 700px){
    max-width: 100%; 
}

`;

export default Image
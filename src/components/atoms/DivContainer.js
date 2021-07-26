import styled from "styled-components";

const DivContainer = styled.div`
    height: 680px;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: space-evenly;
    background-color: #fff7EC;
    margin-bottom: 4em;
    @media (max-width:700px){
        width: 50%; 
        height: 20%;
    }
   
`;

export default DivContainer
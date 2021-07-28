import styled, {css} from "styled-components";

const ContactDiv = styled.div`
min-height: 100%;
    width: 70%;
    position: relative;
    flex-direction: row;
    justify-content: space-evenly;
    background-color: #fff7EC;
    margin-top: 40;
    flex-flow: column;
   
   
    ${props => props.stylingForContact && css`
    border-left: 2px solid #828282;
    padding-left: 2em;

    @media screen and (max-width: 700px) and (min-width: 200px){
        border-left: none;
        width: 60%;
}
 
@media (max-width: 1300px) and (min-width: 800px){
    width: 45%;
       
    }
    `}
    ${props => props.stylingForContactLeft && css`
    

    @media screen and (max-width: 700px) and (min-width: 200px){
        display: none;
    }
    `}
`;


export default ContactDiv
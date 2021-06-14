import styled, {css} from "styled-components";

const ContactDiv = styled.div`
min-height: 100%;
    width: 50%;
    position: relative;
    flex-direction: row;
    justify-content: space-evenly;
    background-color: #fff;
    margin-top: 40;
    flex-flow: column;
   
    ${props => props.stylingForContact && css`
    border-left: 2px solid #828282;
    `}
`;


export default ContactDiv
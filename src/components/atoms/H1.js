import styled, {css} from "styled-components";

const H1 = styled.h1`
    padding-top: 1em;
    padding-bottom: 1.6em;
    text-align : center;
    font-weight : 650; 
    color: #000AFF;
    margin: 30px;
    display: flex;
    flex-direction: column;
    font-size: 2.8em;


    ${props => props.stylingForContact && css`
            padding-top: 0.3em;
            padding-bottom: 0em;
            text-align: left;
            margin-left: 50px;


            @media screen and (max-width: 600px), screen and (max-height: 700px){ 
            font-size: 2em;
            display: block ;
            
            }
    `
}


    `;

    export default H1
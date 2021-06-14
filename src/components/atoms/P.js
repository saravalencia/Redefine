import styled, {css} from "styled-components";

const P = styled.p`
    color: #000;
    line-height: 1.5em;
    font-size: 0.9em;
    text-align: justify;
    padding-top: 3em;

    ${props => props.stylingForContact && css`
                position: absolute;
                margin-left: 50px;
                padding-top: 1em;
                top: 85%;
                font-size: 1.3em;
                @media screen and (max-width: 1280px){
                    font-size: 1.1em;
                    top: 75%;
        }

    `
}

${props => props.stylingForContactName && css`
                font-weight: 600;
                position: absolute;
                margin-left: 75px;
                font-size: 1.4em;
                @media screen and (max-width: 1280px){
                    font-size: 1.1em;
                    padding-top: 2em;
                
                   
                    
        }

    `
}
${props => props.stylingForContactEmail && css`
                font-weight: 600;
                position: absolute;
                margin-left: 75px;
                font-size: 1.4em;
                top: 15%;
                @media screen and (max-width: 1280px){
                    font-size: 1.1em;
                    padding-top: 2em;
                    
        }

    `
}
${props => props.stylingForContactMessage && css`
                font-weight: 600;
                position: absolute;
                margin-left: 75px;
                font-size: 1.4em;
                top: 30%;
                @media screen and (max-width: 1280px){
                    font-size: 1.1em;
                    padding-top: 2em;
                    
        }

    `
}

    `;

    export default P
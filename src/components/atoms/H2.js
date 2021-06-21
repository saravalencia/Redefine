import styled, {css} from 'styled-components'


const H2 = styled.h2`
padding-bottom : 0px;
text-align : center;
font-size : 2em;
display: flex;
flex-direction: row;
position: relative;
justify-content: space-evenly;
padding-top: 1.5em;

${props => props.smallerFont && css`
                font-size: 1.5em;
                @media screen and (max-width: 1280px){
                    font-size: 1.2em;
                    padding-top: 0em;
        }
    `
}
${props => props.stylingForContact && css`
                position: absolute;
                margin-left: 50px;
                padding-top: 1em;

       
    `
}
${props => props.textJustify && css`
                text-align : justify;
    `
}

`;


export default H2
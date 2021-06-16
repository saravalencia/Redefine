import React from 'react';
import styled from 'styled-components';
import Material from './Material';

const MainBody = styled.div ` 
    background-color: pink;
    
`;

const Headding = styled.h2` 
    color: blue;
    text-align: center;
    padding: 1%;

`;
const MiddleElement = styled.div `
  
`;



function What() {
    return ( 
    
        <MainBody id='H1'> 
            <Headding> 
            <h2>WHAT DO WE DO?</h2>
            </Headding>
            <MiddleElement> 
            <Material />
            </MiddleElement>
            
        </MainBody>

       
    
    );
}

export default What;
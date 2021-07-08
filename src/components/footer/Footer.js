import React from "react"; 
import Styled from "styled-components"; 
import "./footer.css"; 

const FooterContainer = Styled.footer`
/* min-width:1440px;
min-height:570.47px;  */
background-color: black;
`;

const Footer = (props) => {
    return(
 <FooterContainer>
     <div className="infoFooterContainer">
     <div className="address">
     <p className="text">Address</p>
     <br />
     <span>Humlebækgade 12 </span>
     <span>2200 København N</span>
     <span>Denmark</span>
     <br />
     <br /> 
     <span>CVR-nr.: xxxxxxxxxx</span>
     </div>
     <div className="Contact">
     <p className="text">Contact</p>
     <br/>
     <span>+45 26 55 41 11 </span>
     <span>hello@redefine.dk</span>
     <br />
     <br/>
     <br />
     <br/>
     
     </div>
     <div className="socialMedia">
     <p className="text">Social Media</p>
     <br/>
     <span>Facebook </span>
     <span>Twitter </span>
     <span>Linkedin</span>
     <span>Instagram </span>
    <br/>
    <br/>
     </div>
    
    </div>
    <div>
        <hr id="footerLine"/>
    </div>
    <div>
    
    </div>
    <div className="titleFooter">
    <h1 className="Rede" >RE:DEFINE</h1>
     <p>Redefine A/S 2022</p>
     <p> Privatlivspolitik</p>
     <p>CookiePolitik</p>
     <p>Etik i Redefine</p>
     </div>
   </FooterContainer>
    )
}

export default Footer; 
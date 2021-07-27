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
     <span className="footerText">Humlebækgade 12 </span>
     <span className="footerText">2200 København N</span>
     <span className="footerText">Denmark</span>
     <br />
     <br /> 
     <span className="footerText">CVR-nr.: xxxxxxxxxx</span>
     </div>
     <div className="Contact">
     <p className="text">Contact</p>
     <br/>
     <span><a className="phoneCompany footerText" href="Tel:+45 26 55 41 11">+45 26 55 41 11</a></span>
     <span><a className="emailCompany footerText" href="mailto: redefine@outlook.dk">Redefine@outlook.dk</a></span>
     <br />
     <br/>
     <br />
     <br/>
     
     </div>
     <div className="socialMedia">
     <p className="text">Social Media</p>
     <br/>
     <span className="socialIcon footerText">Facebook </span>
     <span className="socialIcon footerText">Twitter </span>
     <span className="socialIcon footerText">Linkedin</span>
     <span className="socialIcon footerText">Instagram </span>
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
    <img src="../Images/logo-redefine.svg" className="Rede" style={{width:"200px", height: "auto", backgroundColor: "white"}} />
   {/* <h1 className="Rede" >RE:DEFINE</h1>*/}
     <p className="ptext">Redefine A/S 2022</p>
     <p className="ptext"> Privatlivspolitik</p>
     <p className="ptext">CookiePolitik</p>
     <p className="ptext">Etik i Redefine</p>
     </div>
   </FooterContainer>
    )
}

export default Footer; 
import React from "react"; 
import "../../App.css"
import { MdEmail } from 'react-icons/md';
import {FaPhoneAlt} from "react-icons/fa";
import {AiFillLinkedin} from "react-icons/ai"; 

const Maria = () =>{
    return (
<div className="maria-whole-container">
<h1 className="title-name">WHO IS MARIA?</h1>
    <div className="maria-container">
        <img className="Maria" src="../images/Maria.jpg" />
        <p className="info-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio proin feugiat id semper turpis vestibulum. Mattis magna leo, dui nam convallis eget. Viverra amet suspendisse molestie cras pellentesque turpis. Sapien aenean massa lectus dignissim nunc accumsan, pharetra odio. Mollis interdum penatibus ut placerat turpis. Orci donec a quam enim, ullamcorper ut ullamcorper in. Elementum interdum dolor vestibulum, et, augue consectetur urna enim diam. Sed elementum a mauris iaculis posuere lacus, et diam eget. Et sit et at tempus, et, integer ac sit. Justo, eget risus aliquet aliquam nunc. At et ac, a, auctor tortor nulla turpis orci quis. Elementum mauris volutpat ullamcorper sed sit lacus pellentesque egestas faucibus. Bibendum felis egestas varius senectus mi amet vitae. Orci adipiscing eu morbi malesuada. Lectus blandit mattis eu sapien in pellentesque pretium bibendum elementum. Ut faucibus sed phasellus metus elementum urna, congue. Purus convallis vel purus eget luctus. Malesuada tortor, feugiat consequat faucibus nec vivamus orci purus lacus. Cras rutrum odio suspendisse dolor nec amet.</p>
    </div>
    <div className="info-container2">
    <p><MdEmail/>mander20@student.aau.dk</p>
                <p><FaPhoneAlt/>+(45) 22 18 56 15</p>
                <p><AiFillLinkedin/>https://www.linkedin.com</p>
        </div>
    </div>
    ); 
}

export default Maria; 
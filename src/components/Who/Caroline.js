import React from "react"; 
import "../../App.css";
import { MdEmail } from 'react-icons/md';
import {FaPhoneAlt} from "react-icons/fa";
import {AiFillLinkedin} from "react-icons/ai"; 

const Caroline = () => {
    return (
        <div className="caroline-whole-container">
            <h1 className="caroline-title">WHO IS CAROLINE?</h1>
            <div className="caroline-container">
                <img className="Caroline" src="../images/Caroline.jpg" />
                <p className="caroline-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio proin feugiat id semper turpis vestibulum. Mattis magna leo, dui nam convallis eget. Viverra amet suspendisse molestie cras pellentesque turpis. Sapien aenean massa lectus dignissim nunc accumsan, pharetra odio. Mollis interdum penatibus ut placerat turpis. Orci donec a quam enim, ullamcorper ut ullamcorper in. Elementum interdum dolor vestibulum, et, augue consectetur urna enim diam. Sed elementum a mauris iaculis posuere lacus, et diam eget. Et sit et at tempus, et, integer ac sit. Justo, eget risus aliquet aliquam nunc. At et ac, a, auctor tortor nulla turpis orci quis. Elementum mauris volutpat ullamcorper sed sit lacus pellentesque egestas faucibus. Bibendum felis egestas varius senectus mi amet vitae. Orci adipiscing eu morbi malesuada. Lectus blandit mattis eu sapien in pellentesque pretium bibendum elementum. Ut faucibus sed phasellus metus elementum urna, congue. Purus convallis vel purus eget luctus. Malesuada tortor, feugiat consequat faucibus nec vivamus orci purus lacus. Cras rutrum odio suspendisse dolor nec amet.</p>
                </div>
                <div className="info-container-caroline">
                <p><MdEmail/>caroline.haakonsen@live.dk </p>
                <p><FaPhoneAlt/>+(45) 26 55 41 11</p>
                <p><AiFillLinkedin/>https://www.linkedin.com</p>
                </div> 
            </div>
    )
}

export default Caroline; 
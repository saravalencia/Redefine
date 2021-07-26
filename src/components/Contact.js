  import React from 'react';
  import H1 from './atoms/H1'
  import H2 from './atoms/H2'
  import P from './atoms/P'
  import ContainerContact from './atoms/ContainerContact'
  import ContactDiv from './atoms/ContactDiv'
  import InputContact from './atoms/InputContact'
  import TextArea from './atoms/TextArea'
  import '../App.css'
  import emailjs from 'emailjs-com';
  import styled from 'styled-components'
  
  const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 30em;
    margin-top: 3em;
    padding-left: 2em;

    label{
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: 500;
        font-size: 1.3em;
        margin-top: 1em;
    }
    input {
        height: 2em;
        border: none;
    }
    textarea {
     width: 100%;
     height: 20em;
     border: none;
 }
  `;



  function Contact() {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_a7eumdd', 'template_al7dqei', e.target, 'user_dv0vo2Dt1rpR8kzyk2cXD')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }

    return (
    
        <ContainerContact>
            <ContactDiv stylingForContactLeft>
                <H1 stylingForContact  >Kontakt os</H1>
                <H2 stylingForContact smallerFont  >Vi er altid klar på nye henvendelser og nye historier.<br/>

Udfyld kontaktformularen til højre eller send  en mail <br/> på redefine@outlook.dk. 

<br/>Vi ser frem til at høre fra dig.</H2>
                {/* <P stylingForContact>Based in Denmark.<br/> Working remote and worldwide.</P> */}
            </ContactDiv>
            <ContactDiv stylingForContact>
                <Form onSubmit={sendEmail}>
                <label>Name</label>
      <input type="text" name="name" placeholder='Enter your name' id='name'/>
      <label>Email</label>
      <input type="email" name="email"  placeholder='Enter your email' id='email' />
      <label  >Message</label>
      <textarea name="message" placeholder='Enter your message' />
      <button className="buttonContact">Send</button>
                </Form >
                
            </ContactDiv>

        </ContainerContact>
    
    )
  }

  export default Contact 
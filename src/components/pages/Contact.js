  import React from 'react';
  import H1 from '../atoms/H1'
  import H2 from '../atoms/H2'
  import P from '../atoms/P'
  import ContainerContact from '../atoms/ContainerContact'
  import ContactDiv from '../atoms/ContactDiv'
  import InputContact from '../atoms/InputContact'
  import TextArea from '../atoms/TextArea'
  
  



  function Contact() {
    return (
        <ContainerContact>
            <ContactDiv>
                <H1 stylingForContact  >CONTACT US</H1>
                <H2 stylingForContact smallerFont textJustify >If you’d like to talk about working<br/> with us then we’d love to hear<br/> your story.</H2>
                <P stylingForContact>Based in Denmark.<br/> Working remote and worldwide.</P>
            </ContactDiv>
            <ContactDiv stylingForContact>
                <P stylingForContactName>Name*</P>
                <InputContact/>
                <P stylingForContactEmail>Email*</P>
                <InputContact stylingForContactEmail/>
                <P stylingForContactMessage>Message*</P>
                <TextArea></TextArea>
                
                
            </ContactDiv>

        </ContainerContact>
    )
  }

  export default Contact 
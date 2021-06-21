import React from 'react';
import Container from '../atoms/Container'
import Div from '../atoms/Div'
import DivContainer from '../atoms/DivContainer'
import H1 from '../atoms/H1'
import P from '../atoms/P'
import ImageDiv from '../atoms/ImageDiv'
import pic1 from './images/pic1.png'
import pic2 from './images/pic2.png'
import H2 from '../atoms/H2'
import Video from '../atoms/Video'
import video from './video/video.mp4'

function WorkedWith() {
    return (
      
      <Container>
          <H1>WE'VE WORKED WITH</H1>
          <DivContainer>
          <Div>
            <ImageDiv src={pic1}/>
                <H2>Kultur distriktet</H2>
                <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, praesentium temporibus. Praesentium dicta quibusdam, quod at officiis nostrum ullam magnam placeat id et doloribus repellat natus voluptas, in suscipit quidem.
                Corrupti repellendus sed nostrum magni facere fugit iure excepturi qui mollitia hic, eligendi odit consectetur eum earum commodi? Ut, odit dignissimos molestias maiores fugit incidunt iure facilis animi recusandae harum.
                Autem quae dignissimos voluptas et? Optio veniam minus fugit nemo amet nulla, omnis earum impedit debitis, esse, quam assumenda sequi. Quasi, voluptatum. Qui quam enim voluptatem adipisci expedita, autem molestias.</P>
          </Div>
          <Div>
              <ImageDiv src={pic2}/>
              <H2>Kultur distriktet</H2>
              <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, praesentium temporibus. Praesentium dicta quibusdam, quod at officiis nostrum ullam magnam placeat id et doloribus repellat natus voluptas, in suscipit quidem.
                Corrupti repellendus sed nostrum magni facere fugit iure excepturi qui mollitia hic, eligendi odit consectetur eum earum commodi? Ut, odit dignissimos molestias maiores fugit incidunt iure facilis animi recusandae harum.
                Autem quae dignissimos voluptas et? Optio veniam minus fugit nemo amet nulla, omnis earum impedit debitis, esse, quam assumenda sequi. Quasi, voluptatum. Qui quam enim voluptatem adipisci expedita, autem molestias.</P>
          </Div>
          </DivContainer>
         
            <Video src={video} autoPlay controls loop type='video/mp4'></Video>
          
      </Container>

      
    );
  }
  
  export default WorkedWith;
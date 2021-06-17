import React from 'react'
import styles from './Picture.module.css'
import picture from './bgpic.jpeg'
import Typewriter from "typewriter-effect";
import { Button } from 'reactstrap';

const Picture = () => {
    return (
    //   <div style={{backgroundColor:'rgb(248, 248, 238)'}}>   
    //   <img src={picture} style={{width:'80%',margin:'0 10%'}} />             
    //   </div>  
    <div id='book'>   
    <br/><br/><br/><br/>
    <div data-aos='fade-left' data-aos-duration="1500" className={styles.App} style={{margin:'0 10%',backgroundImage:`url(${picture})`,boxShadow:'0 0 2rem 0 grey'}}>
      <br/><br/><br/>
      <Button href='https://docs.google.com/forms/d/e/1FAIpQLSe0oyUVUOu6NE9ItUn-45vdC_57x0LufOTPLNL-47TCR1tReQ/viewform?usp=sf_link' style={{color:'ivory',backgroundColor:'teal',fontWeight:'300'}} size="lg" >BOOK AN APPOINTMENT</Button>
      <br/><br/><br/><br/>
      <div style={{height:'25rem'}}>
      <Typewriter 
        options={{
          autoStart: true,
          loop:true}}
       onInit={(typewriter)=> {    
       typewriter      
       .typeString(`“There is hope, even when your brain tells you there isn’t.” ― John Green`)     
       .pauseFor(1000)
       .deleteAll()
       .typeString(`“Sometimes the people around you won’t understand your journey. They don’t need to, it’s not for them.” — Joubert Botha`)
       .pauseFor(1000)
       .deleteAll()
       .typeString(`“Tough times never last, but tough people do!” — Robert Schuller`)
       .pauseFor(1000)
       .deleteAll()
       .typeString(`“Not until we are lost do we begin to understand ourselves” ― Henry David Thoreau`)
       .pauseFor(1000)
       .deleteAll()
       .typeString(`“Happiness can be found even in the darkest of times, if one only remembers to turn on the light.” — Albus Dumbledore`)
       .pauseFor(1000)
       .deleteAll()
       .typeString(`“Change what you can, manage what you can’t.” ― Raymond McCauley`)              
       .pauseFor(1000)
       .deleteAll()
       .typeString(`“If there is no struggle, there is no progress.” — Fredrick Douglass`)                     
       .start();
       }}
       />
       </div>
       {/* <br/><br/><br/><br/><br/><br/> */}
    </div>  
    </div>  
    );
  }
  
  export default Picture;
import React from 'react'
import founder1 from './founder1.jpeg'
import founder2 from './founder2.jpeg'
import styles from './Intro.module.css'
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';
const Intro = () => {
    return (
      <div className={styles.x} id='intro' >
      <div><br/><br/><br/><br/><br/></div>
      <h1 data-aos='fade-right' data-aos-duration="1500" className={styles.h1} id='id1'>WHAT WE ARE</h1>
      <div data-aos='fade-left' data-aos-duration="1500" style={{fontSize:'large',alignContent:'center',marginTop:'3rem',color:'rgb(77, 77, 77)',fontFamily:'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'}}>CURASIA is a Neuro-Psychiatry oriented and Psychological based social enterprise offering all types of evidence based counselling which  caters to your mental health ailments tailored to your needs and circumstances.  We help clients survive past their adversities and make them realize their potential of being positive contributing and well-functioning members of the society.<br/><br/>We have a team of eminent doctors working with a renowned psychologist Dr.Omi Singh who has successfully diagnosed and treated several mental health problems.<br/><br/>We offer Counselling, Psychotherapy, Psychological evaluation and various types Psychological assessments for children, adolescents, students, adults, geriatric members and families suffering from a range of emotional, social, mental and  addictive problems.<br/><br/></div>
      {/* <div data-aos='fade-up' data-aos-duration="3000">
      <Card inverse className={styles.f1}>
        <CardImg  src={founder1} alt="Card image cap" />
        <CardImgOverlay>
          <CardTitle tag="h5"></CardTitle>
        </CardImgOverlay>
      </Card>
      <Card inverse className={styles.f2}>
        <CardImg  src={founder2} alt="Card image cap" />
        <CardImgOverlay>
          <CardTitle tag="h5"></CardTitle>
        </CardImgOverlay>
      </Card>
      
      </div> */}
      <br/><br/><br/><br/>
      </div>  
        
    );
  }
  
  export default Intro;
  // We offer Counselling, Psychotherapy, Psychological evaluation and various types Psychological assessments for children, adolescents, students, adults, geriatric members and families suffering from a range of emotional, social, mental and  addictive problems. We specialize in the assessment, diagnosis and treatment of a variety of conditions ranging from  common stress,anger issues, hyperactivity, disturbed sleep, work pressure, relationship issues, anxiety and depression to mild and severe disorders such as suicidal ideation, OCD, ODD, ADHD, Schizophrenia, Bipolar disorders, psychotic disorders , delusion disorders, Autism, PTSD, mental retardation, drug abuse, substance abuse, alcoholism . We have been successful in handling daily issues of students pertaining to performance pressure, low motivation, lack of concentration, disrespectful rebellious children, phone addiction, mood swings, peer pressure, low appetite, so on and so forth.   
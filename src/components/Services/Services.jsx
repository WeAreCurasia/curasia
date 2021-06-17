import React from 'react'
import styles from './Services.module.css'
import { Card, CardTitle, CardText } from 'reactstrap';
const Services = () => {
    return ( 
    <div className={styles.x} id='services'> 
    <br/><br/><br/><br/>
    <h1 data-aos='fade-right' data-aos-duration="1500" style={{marginTop:'3%',textAlign:'center',color:'cornflowerblue'}}>OUR SERVICES</h1>
    <Card data-aos='fade-up' data-aos-duration="1500" body inverse style={{boxShadow: '1px 5px 10px 0px rgb(200, 200, 200)'}} className={styles.Card}>
        <CardTitle className={styles.CardTitle} tag="h6">ADULT PSYCHIATRY</CardTitle><br/>
        <CardText className={styles.CardText}>{' > '}Depression<br/>{' > '}Anxiety<br/>{' > '}Schizophrenia<br/>{' > '}Cannabis<br/>{' > '}Cocaine<br/>{' > '}OCD<br/>{' > '}Phobias<br/>{' > '}Adjustment Disorder<br/>{' > '}Post-Traumatic Stress Disorder<br/>{' > '}Eating Disorder<br/></CardText>
      </Card>
      <Card data-aos='fade-up' data-aos-duration="1500" body inverse style={{boxShadow: '1px 5px 10px 0px rgb(200, 200, 200)'}} className={styles.Card}>
        <CardTitle className={styles.CardTitle} tag="h6">GERIATRIC PSYCHIATRY</CardTitle><br/>
        <CardText className={styles.CardText}>{' > '}Depression of Old Age<br/>{' > '}Dementias<br/>{' > '}Parkinson's Disease<br/>{' > '}Sleep Disturbances<br/>{' > '}Memory Loss<br/><br/><br/><br/></CardText>
      </Card>
      <Card data-aos='fade-up' data-aos-duration="1500" body inverse style={{boxShadow: '1px 5px 10px 0px rgb(200, 200, 200)'}} className={styles.Card}>
        <CardTitle className={styles.CardTitle} tag="h6">CHILD PSYCHIATRY<br/><br/></CardTitle>
        <CardText className={styles.CardText}>{' > '}Autism<br/>{' > '}ADHD<br/>{' > '}Eating Disorders<br/>{' > '}Mental Retardation<br/>{' > '}Learning disorder<br/>{' > '}Conduct Disorder<br/>{' > '}Behavioral Problems associated with Puberty<br/></CardText>
      </Card>
      <Card data-aos='fade-up' data-aos-duration="1500" body inverse style={{boxShadow: '1px 5px 10px 0px rgb(200, 200, 200)'}} className={styles.Card}>
        <CardTitle className={styles.CardTitle} tag="h6">WOMAN MENTAL HEALTH<br/><br/></CardTitle>
        <CardText className={styles.CardText}>{' > '}Pre-menstrual dysphoric syndrome<br/>{' > '}Post-Traumatic Stress Disorder<br/>{' > '}Adjustment Issues<br/>{' > '}Chronic Pain and Headache<br/>{' > '}Pre and Post Natal Counseling and Treatment<br/>{' > '}Post-Partum Depression and Psychosis<br/><br/></CardText>
      </Card> 
      <br/><br/>    
    </div>  
    );
  }
  
  export default Services;
import React from 'react'
import insta from './insta.png'
import linkedIn from './linkedIn.png'
import gmail from './gmail.png'
import styles from './Contact.module.css'
// import insta from './insta.png'
import { Card, CardTitle, CardText } from 'reactstrap';
const Contact = () => {
    return (
      <div data-aos='fade-in' data-aos-duration="1500" className={styles.x} id='contact'>
      <Card data-aos='fade-up' data-aos-duration="1500" body inverse style={{backgroundColor:'#2d2b2a',borderColor:'rgb(77, 76, 76)'}} className={styles.Card}>
        <CardTitle className={styles.CardTitle} tag="h6">LINKS<br/><br/></CardTitle>       
        <CardText className={styles.CardText} style={{fontSize:'large'}}><a href='https://www.linkedin.com/company/curasia/'><img alt='linkedIn profile' src={linkedIn} style={{height:'auto',width:'20%',margin:'10% 6.66%'}}></img></a><a href='https://www.instagram.com/_curasia_/'><img alt='Instagram profile' src={insta} style={{height:'auto',width:'20%',margin:'10% 6.66%'}}></img></a><a href='mailto:curasia1010@gmail.com'><img alt='send mail' src={gmail} style={{height:'auto',width:'20%',margin:'10% 6.66%'}}></img></a></CardText>
      </Card>
      <Card data-aos='fade-up' data-aos-duration="1500" body inverse style={{backgroundColor:'#2d2b2a',borderColor:'rgb(77, 76, 76)'}} className={styles.Card}>
        <CardTitle className={styles.CardTitle} tag="h6">@ CONTACT US<br/><br/></CardTitle>
        <CardText className={styles.CardText}>mail : <a className={styles.a} style={{color:'grey',textDecoration:'none'}} href='mailto:curasia1010@gmail.com'>curasia1010@gmail.com</a><br/><br/>Phone : <a className={styles.a} style={{color:'grey',textDecoration:'none'}}>+918709168739</a> ; <a className={styles.a} style={{color:'grey',textDecoration:'none'}}>+919852933960</a><br/><br/>Address : </CardText>
      </Card>   
      </div>  
        
    );
  }
  
  export default Contact;
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import styles from './Navi.module.css'
// import dmarg from '../../margins/leftmarg.svg'
// import umarg from '../../margins/horizontalmarg.svg'
import logo from './logo.jpg'
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Navi = ({func}) => {
  
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = (props) => setCollapsed(!collapsed);
  
  return (
    <div >
      <Navbar data-aos='fade-in' data-aos-duration="1500"  className={styles.x}  color="faded" light >
      <img  alt-text='logo' src={logo} style={{width:'10%',height:'auto',marginLeft:'3rem'}} />
        <NavbarBrand style={{fontSize:"120%",color:'white',marginRight:'1%'}} >A Neuro-Psychiatry oriented social enterprise<br/></NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" style={{marginTop:'5%',marginBottom:'5%',marginLeft:'5%',marginRight:'10%'}}/>
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar style={{fontSize:"150%",color:'white',fontFamily:'ariel'}} >
            <NavItem>
              <NavLink href='#intro' style={{color:'rgb(228, 218, 175)'}} >WHAT WE ARE</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#book" style={{color:'white'}}>BOOK AN APPOINTMENT</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#services" style={{color:'rgb(228, 218, 175)'}}>SERVICES</NavLink>
            </NavItem>          
            <NavItem>
              <NavLink href="#contact" style={{color:'rgb(228, 218, 175)'}}>CONTACT US</NavLink>
            </NavItem>            
            </Nav>
        </Collapse>
      </Navbar>
      {/* <div style={{backgroundImage:'linear-gradient(rgb(248, 248, 238),white)'}}><br/><br/></div> */}
      
    </div>
  );
}

NavbarToggler.propTypes = {
  type: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
}

export default Navi;
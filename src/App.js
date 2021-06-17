// import styles from './App.module.css';

import Navi from './components/Navi/Navi';
import Intro from './components/Intro/Intro';
import Picture from './components/Picture/Picture';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';

import React,{Component} from 'react'

export class App extends Component {
  
  scrollFunction = async (comp) => {
    
    console.log();
}
  render() {
    return (
      <div >
        <Navi func={this.scrollFunction}/>
        <Intro/>
        {/* <Members/> */}
        <Picture />
        <Services /> 
        <Contact/>
      </div>
    )
  }
}

export default App


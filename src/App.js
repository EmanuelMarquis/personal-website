import './App.css';
import Navbar from './components/navbar';
import FloatingWindow from './components/floatingWindow';
import { Fragment } from 'react';
import CheckeredStripe from './components/checkeredStripe';

export default function App() {

  const aboutMe = <Fragment>
    I'm a 18 year-old lad from the<br/>
    northeast of Brazil, looking for<br/>
    cool job opportunities as a<br/> 
    frontend developer.
  </Fragment>;

  return (<div>
    <Navbar/>
    <p className='font-bold text-center text-6xl mt-64 mb-56'>
      Hello! I'm Emanuel Marquis,<br/>
      a Frontend Developer.
    </p>
    <CheckeredStripe/>
    <span className='relative z-0 px-2 flex justify-end' style={{top: "-24rem"}}>
      <FloatingWindow msg={aboutMe}/>
    </span>
    {/* <div>
      <FloatingWindow msg={""}/>
      <FloatingWindow msg={""}/>
      <FloatingWindow msg={""}/>
    </div> */}
  </div>);
}
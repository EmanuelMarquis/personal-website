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

  const techStack = <Fragment>
    - ReactJS<br/>
    - TailwindCSS<br/>
    - Javascript<br/>
    - Html<br/>
    - Css<br/>
  </Fragment>

  const familiarWith = <Fragment>
    - NodeJS<br/>
    - Firebase<br/>
    - Git& Github<br/>
    - Dart<br/>
    <br/>
  </Fragment>

  return (<div>
    <Navbar/>
    <p className='font-bold text-center text-6xl mt-64 mb-56'>
      Hello! I'm Emanuel Marquis,<br/>
      a Frontend Developer.
    </p>
    <CheckeredStripe/>
    <span className='relative z-0 px-2 flex justify-end' style={{top: "-24rem"}}>
      <FloatingWindow msg={aboutMe} isPosAbsolute={true}/>
    </span>
    <div className='pb-32'>
      <p className='text-start ml-6 mb-16 mt-24 font-bold text-6xl'>My Skill Set:</p>
      <div className='flex gap-10 pl-24'>
        <FloatingWindow title={"Tech Stack"} msg={techStack}/>
        <FloatingWindow title={"Familiar With"} msg={familiarWith}/>
      </div>
    </div>
  </div>);
}
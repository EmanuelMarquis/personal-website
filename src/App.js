import './App.css';
import Navbar from './components/navbar';
import FloatingWindow from './components/floatingWindow';

export default function App() {

  const aboutMe = <text>
    I'm a 18 year-old lad from the<br/>
    northeast of Brazil, looking for<br/>
    cool job opportunities as a<br/> 
    frontend developer.
  </text>;

  return (<div>
    <Navbar/>
    <p className='font-bold text-center text-6xl my-48'>
      Hello! I'm Emanuel Marquis,<br/>
      a Frontend Developer.
    </p>
    <div className='flex justify-end pr-12'>
      <FloatingWindow msg={aboutMe}/>
    </div>
  </div>);
}
import React,{useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import Contact from './components/ContactForm';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import NavBar from './components/NavBar';


function App() {
  const [currentNavItem, setCurrentNavItem] = useState('Home');
  const [navSelected, setNavSelected] =useState('About');
  
  

  return (
            <>
            <main className='background'>
              <NavBar 
                currentNavItem={currentNavItem} 
                setCurrentNavItem={setCurrentNavItem}
                navSelected={navSelected}
                setNavSelected={setNavSelected}
              />
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path='/contact' element={<Contact/>}/>
                  <Route path='/about' element={<AboutMe/>}/>
                  <Route path='/projects' element={<Projects/>}/>
                  <Route path='/resume' element={<Resume/>}/>
                  <Route path="*" element={<NoMatch/>} />
              
              </Routes>
                {/* divs for the animated stars/particles */}
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
            </main>
            </>
  );
}

export default App;

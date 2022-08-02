import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './components/Home';
import NoMatch from './components/Layout/NoMatch';
import Layout from './components/Layout';
import Contact from './components/ContactForm';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';


function App() {
  return (
            <>
              <Routes>
                <Route path="/" element={<Layout/>}>
                  <Route  index element={<Home />} />
                  <Route path='/contact' element={<Contact/>}/>
                  <Route path='/about' element={<AboutMe/>}/>
                  <Route path='/projects' element={<Projects/>}/>
                  <Route path="*" element={<NoMatch />} />
                </Route>
              </Routes>
                {/* divs for the animated stars/particles */}
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
            </>
  );
}

export default App;

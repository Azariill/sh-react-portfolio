import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './components/Home';
import NoMatch from './components/Layout/NoMatch';
import Layout from './components/Layout';


function App() {
  return (
            <>
              <Routes>
                <Route path="/" element={<Layout/>}>
                  <Route  index element={<Home />} />
                  <Route path="*" element={<NoMatch />} />
                </Route>
              </Routes>
            </>
  );
}

export default App;

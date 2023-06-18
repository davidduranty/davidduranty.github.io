import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Actuality from './pages/Actuality';
import Photos from './pages/Photos';
import Results from './pages/Results';
import Team from './pages/Team';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/actuality' element={<Actuality/>}/>
        <Route path='/photos' element={<Photos/>}/>
        <Route path='/results' element={<Results/>}/>
        <Route path='/team' element={<Team/>}/>
        <Route path='*' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

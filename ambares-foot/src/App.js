import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Photo from './pages/Photo';
import Team from './pages/Team';
import Evenement from './pages/Evenement';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Home/> } />
        <Route path='/photo' element={<Photo/> } />
        <Route path='/team' element={<Team/> } />
        <Route path='/evenement' element={<Evenement/> } />
      </Routes>
    </BrowserRouter>
  );
};

export default App;



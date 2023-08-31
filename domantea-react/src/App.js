import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Gourmand from "./pages/Gourmand";
import Familly from "./pages/Familly";
import Accessoires from "./pages/Accessoires";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
        {/* <Route path="/BOITES & SACHETS" element={<Boite />} /> */}
        {/* <Route path="/COFFRETS & CADEAUX" element={<Coffret />} /> */}
        <Route path="/ACCESSOIRES" element={<Accessoires />} />
        <Route path="/GOURMANDISES" element={<Gourmand />} />
        <Route path="/FAMILLE DOMAN" element={<Familly />} />
        {/* <Route path="/THES & INFUSIONS" element={<The />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;

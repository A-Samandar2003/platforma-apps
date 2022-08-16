import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from "./Routes/About";
import Contact from "./Routes/Contact";
import Layout from "./Routes/Layaut";
import Menu from "./Routes/Menu";
import './scss/import.scss';
  
  

  



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Menu />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="contact" element={<Contact />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

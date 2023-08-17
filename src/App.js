import Particle from "./components/Particle";
import "./App.css"
import "animate.css/animate.min.css";
import React, { useState } from 'react'
import Home from "./components/Home";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import About from "./components/About";
function App() {
  return (
    <div>

      <Particle/>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element = {<Home/>}></Route>
          <Route path='/projects' element = {<Projects/>}></Route>
          <Route path='/about' element = {<About/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
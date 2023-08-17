import Particle from "./components/Particle";
import "./App.css"
import "animate.css/animate.min.css";
import React, { useState } from 'react'
import Home from "./components/Home";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar/>
      <Particle/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Home/>}></Route>
          <Route path='/projects' element = {<Projects/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
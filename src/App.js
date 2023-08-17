import Particle from "./components/Particle";
import "./App.css"
import "animate.css/animate.min.css";
import React, { useState } from 'react'
import Home from "./components/Home";
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


function App() {
  return (
    <div>
      <Particle/>
      <Home/>
    </div>
  );
}


export default App;

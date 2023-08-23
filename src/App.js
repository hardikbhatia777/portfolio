import "./App.css"
import "animate.css/animate.min.css";
import React, { useEffect, useState } from 'react'
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import About from "./components/About";
import StarsCanvas from "./canvas/Stars";
import Skills from "./components/Skills";


function App() {
  
  const [loading, isLoading] =  useState()
  return (
    <div>
      {
        !isLoading
        ?
        <div className="hello">
            LOADING
        </div>
        :
        <BrowserRouter>
        <StarsCanvas/>
        <Navbar/>
          <Routes>
            <Route path='/' element = {<Home/>}></Route>
            <Route path='/projects' element = {<Projects/>}></Route>
            <Route path='/skills' element = {<Skills/>}></Route>
            <Route path='/about' element = {<About/>}></Route>
          </Routes>
          
        </BrowserRouter>
      }

      
    </div>
  );
}


export default App;
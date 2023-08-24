import React from 'react'
import { Route, Routes, Link } from "react-router-dom"

export default function Navbar() {
  return (
    <div className='navbar-main'>
        <div className='navbar-item'>
        <Link to="/" className = 'link-main'>
            <div className='navbar-link' tabindex = "1">
             Home 
            </div>
            </Link>
        </div>        
        <div className='navbar-item'>
            <Link to="/about" className = 'link-main'> 
            <div className='navbar-link' tabindex = "1">
                About
            </div> 
            </Link>
        </div>
        <div className='navbar-item'>
        <Link to="/skills" className = 'link-main'>
            <div className='navbar-link' tabindex = "1">
                 Skills
            </div>
        </Link>
        </div> 
        <div className='navbar-item'>
        <Link to="/projects" className = 'link-main'>
            <div className='navbar-link' tabIndex = "1">
                 Projects 
            </div>
            </Link>
        </div>
    </div>
  )
}

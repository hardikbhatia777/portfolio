import React from 'react'
import {Cursor, useTypewriter} from "react-simple-typewriter"
import git_blue from "./media/git_blue.png"
import linkedin from "./media/linkedin.png"
import twitter from "./media/twitter.png"
import instagram from "./media/instagram.png"
import {
  ChakraProvider,
  Heading,
  Container,
  Text,
  Input,
  Button,
  Wrap,
  Stack, 
  Image,
  Link,
  SkeletonCircle,
  SkeletonText,
  Center,
} from "@chakra-ui/react";
import StarsCanvas from '../canvas/Stars'
import Project from './containers/Project'

export default function Projects() {

  return (
    <div className='main'>
        <div className="projects-content">
          <div className='project-main'>
            <Project name='SEER'/>
            <Project name='AI Image Generator'/>
            <Project name='HealthConnect'/>
            <Project name='Gesture Rover Navigation'/>
            <Project name='Facial Mask Recognition'/>
            <Project name='Library Management System'/>
          </div>
        </div>
    </div>
  )
}

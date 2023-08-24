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
import EarthCanvas from '../canvas/Earth'
import { motion } from 'framer-motion'
import StarsCanvas from '../canvas/Stars'
export default function Home() {
    const [text, count]= useTypewriter({
        words: ["Computer Vision", "Data Science", "MLOps"],
        loop:true,
        typeSpeed: 40,
        deleteSpeed: 40,
        delaySpeed: 1500,})
  return (
    
    <div className='main'>
        <div className="content">
        <ChakraProvider>
      <Container centerContent maxW={2000}>
      <motion.div
      initial={{ y: -100, opacity: 0, scale: 1 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        delay: 0,
        ease: [0, 0.5, 0.2, 1.01]
      }}>
        <Text
          bgGradient='linear(to-l, #FFFFFFDD, #FFFFFFDD)'
          bgClip='text'
          fontSize='8xl'
          fontWeight='bold'
        >
            Hardik Bhatia
            </Text>
            
        
        <Text
          bgGradient='linear(to-l, #113dceBB, #ffffffBB)'
          bgClip='text'
          fontSize='4xl'
          fontWeight= 'semibold'
          textAlign='center'
        >

        {text}<Cursor cursorColor='white'/><br/>
        </Text>
        </motion.div>
        <div className="links">
        <motion.div
      initial={{ y: 50, opacity: 0, scale: 1 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.3,
        ease: [0, 0.5, 0.2, 1.01]
      }}>
        <a id="alinks" className="links" href="https://github.com/hardikbhatia777"><img className="git" src={git_blue} height="50px" width="50px"/></a>
        <a id="alinks" className="links" href="https://github.com/hardikbhatia777"><img src={linkedin} height="50px" width="50px"/></a>
        <a id="alinks" className="links" href="https://github.com/hardikbhatia777"><img src={twitter} height="50px" width="50px"/></a>
        <a id="alinks" className="links" href="https://github.com/hardikbhatia777"><img src={instagram} height="50px" width="50px"/></a>
        </motion.div>
    </div>

    </Container>
    </ChakraProvider></div>
    </div>
  )
}

import React from 'react'
import video from "./media/video.mp4"
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

import { motion } from 'framer-motion'

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
          bgGradient='linear(to-l, #FFFFFF, #FFFFFF)'
          bgClip='text'
          fontSize='3xl'
          fontWeight='semibold'
          fontFamily='Roboto'
        >
            Hey there, I am Hardik Bhatia, a third year student pursuing Information Technology at VIT Vellore</Text>
          </motion.div>

    </Container>
    </ChakraProvider></div>

    
    </div>
  )
}

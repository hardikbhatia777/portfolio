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
export default function Home() {
    const [text, count]= useTypewriter({
        words: ["Computer Vision", "Data Science", "MLOps"],
        loop:true,
        delaySpeed:600,})
  return (
    <div className='main'>
        <div className="overlay"></div>
        <div className="content">
        <ChakraProvider>
      
      <Container centerContent maxW={2000}>
        <Text
          bgGradient='linear(to-l, #FFFFFF, #FFFFFF)'
          bgClip='text'
          fontSize='8xl'
          fontWeight='bold'
        >
        
        Hardik Bhatia
        </Text>
        <Text
          bgGradient='linear(to-l, #7928CA, #FF0080)'
          bgClip='text'
          fontSize='4xl'
          fontWeight= 'semibold'
        >
        
        {text}<Cursor cursorColor='white'/><br/>
        </Text>
        <div className="links">
        <a id="alinks" className="links" href="https://github.com/hardikbhatia777"><img className="git" src={git_blue} height="50px" width="50px"/></a>
        <a id="alinks" className="links" href="https://github.com/hardikbhatia777"><img src={linkedin} height="50px" width="50px"/></a>
        <a id="alinks" className="links" href="https://github.com/hardikbhatia777"><img src={twitter} height="50px" width="50px"/></a>
        <a id="alinks" className="links" href="https://github.com/hardikbhatia777"><img src={instagram} height="50px" width="50px"/></a>
    </div>
    </Container>
        </ChakraProvider></div>

    
    </div>
  )
}

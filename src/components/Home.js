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
        </ChakraProvider>
    <div className="flexcont"> 
      <div className="para">
        <center><h1>About me</h1><br/>A problem solver of spectacular skill. Adept at coding in C++, Python, Java and comfortable with working in framworks such as Angular, React and Django amongst many others.
        I am a Web Development and Machine Learning enthusiast. I am a fast learner and actively engaged in many different domains involving coding, scripting, data science and more! </center>
      </div><div className="para">
        <center><h1>About me</h1><br/>A problem solver of spectacular skill. Adept at coding in C++, Python, Java and comfortable with working in framworks such as Angular, React and Django amongst many others.
        I am a Web Development and Machine Learning enthusiast. I am a fast learner and actively engaged in many different domains involving coding, scripting, data science and more! </center>
        <Link to="hehe" smooth={true}></Link>
      </div>
      </div></div>

    
    </div>
  )
}

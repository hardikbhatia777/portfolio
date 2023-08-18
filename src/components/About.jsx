import React from 'react'
import arrow from "./media/arrow.png"
import { useInView } from "framer-motion";
import { useRef } from 'react'
import {
  ChakraProvider,
  Container,
} from "@chakra-ui/react";
import AI2 from "./media/AI2.png"
import { motion } from 'framer-motion'
import EarthCanvas from '../canvas/Earth';

const scrollToBottom = () => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth',
  });
};





export default function Home() {

  return (
    <div className='main'>
      <div className="content">
      <ChakraProvider>
      <Container centerContent maxW={2000}>
      <motion.div
      initial={{ x: 100, opacity: 0, scale: 1 }}
      animate={{ x: 0, opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        delay: 0,
        ease: [0, 0.5, 0.2, 1.01]
      }}>

            <span style={{fontSize: 80, color: '#ebebebce'}}>Hey there 👋</span><br/> 
            </motion.div>
      <motion.div
      initial={{ x: -100, opacity: 0, scale: 1 }}
      animate={{ x: 0, opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        delay: 0.3,
        ease: [0, 0.5, 0.2, 1.01]
      }}>
            <div className='about-heading'>
            I'm Hardik, an AI developer specializing in<br/>
            Deep Learning and Data Science. 
         </div><br/><br/>
      </motion.div>
      <motion.div
      initial={{ y: 100, opacity: 0, scale: 1 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        delay: 0.6,
        ease: [0, 0.5, 0.2, 1.01]
      }}>
         <div className='about-heading'>
          As an engineer, I strive to provide unique and optimized solutions <br/>
          to problems from all domains of software development.
         </div>
         </motion.div>
      <br/><br/><br/><br/><br/><br/>
      <motion.div
      initial={{ y: -100, opacity: 0, scale: 1 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        delay: 0.9,
        ease: [0, 0.5, 0.2, 1.01]
      }}>
      <div className="link btn" onClick={scrollToBottom}>
          <img src={arrow} height="60px" width="60px" />
      </div>
      <br/><br/><br/><br/><br/><br/><br/>
      </motion.div>

        <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ 
        duration: 0.3,
        delay: 0.3,
        ease: [0, 0.5, 0.2, 1.01] }}
      variants={{
        visible: { x: 0, opacity: 1, scale: 1 },
        hidden: { x: -100, opacity: 0, scale: 1 }
      }}
    >
      <br/><br/><br/>
        <div className='interest'>
        <div className='about-content'>
        Welcome to my corner of the digital realm! I'm thrilled to have you here. I'm a passionate
         software engineer with a deep-rooted love for crafting innovative solutions that meld technology 
         and creativity. With fluency in both C++ and Python, I find myself right at home navigating
         the intricate landscapes of code.
         <br/> <br/>
        My expertise lies in the captivating field of Artificial Intelligence. The world of AI is where 
        I've dedicated countless hours, delving into its intricate algorithms and models. 
        From predictive analytics to large language models, I find the challenge of teaching machines 
        to learn and make decisions utterly exhilarating. The ever-evolving nature of AI keeps me 
        on my toes, always hungry to learn and experiment with the latest advancements.
        <br/> <br/>
        Beyond AI, I'm an avid explorer of the web development realm. I revel in the art of creating sleek, 
        user-friendly interfaces that seamlessly merge form and function. Whether it's responsive designs, 
        interactive user experiences, or the magic of backend development, I'm always up for the challenge.
        <br/> <br/>
        This website serves as a glimpse into my world of coding, AI exploration, and web development endeavors. 
        Join me on this exciting journey of bytes and pixels as we navigate the ever-expanding horizons of technology
         together. I'm delighted to 
         have you accompany me on this adventure!

         </div>
         <div className='earth'> 
            <EarthCanvas/>
          </div>
          </div>

        
        </motion.div>
        </Container>
    </ChakraProvider>
</div>
    </div>

  )
}

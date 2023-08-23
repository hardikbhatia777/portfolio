import React from 'react'
import angular from "./media/angular.png"
import C from "./media/C.png"
import cpp from "./media/cpp.webp"
import docker from "./media/docker.png"
import git_blue from "./media/git_blue.png"
import html from "./media/html.png"
import java from "./media/java.png"
import next from "./media/next.png"
import node from "./media/node.png"
import numpy from "./media/numpy.png"
import python from "./media/python.png"
import react from "./media/react.png"
import tailwind from "./media/tailwind.png"
import javascript from "./media/javascript.png"
import tensorflow from "./media/tensorflow.png"
import torch from "./media/torch.png"
import { ChakraProvider,Container } from '@chakra-ui/react'
import { motion } from 'framer-motion'
export default function Skills() {  

  return (

    <div className='main'>
        <div className='skills-content'>
        <ChakraProvider>
        <motion.div
      initial={{ y: -100, opacity: 0, scale: 1 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        delay: 0,
        ease: [0, 0.5, 0.2, 1.01]
      }}>


<div className='skills-main'>
              
      <div className='skills-box'>
                
            <div className='skills-heading'>
                  Programming
                  <br/>
                  <span className='skills-heading-color-1'>
                    Languages
                  </span>
            </div>
            </div>
      <div className='skills-box'>
                <div className='skills-item'>
                <img src={python} height='60px' width='60px' className='about-links'/>
                <br/>Python
              </div>
              <div className='skills-item'>
                <img src={cpp} height='60px' width='60px' className='about-links'/>
                <br/>C++
              </div>
              <div className='skills-item'>
                <img src={javascript} height='60px' width='60px' className='about-links'/>
                <br/>JavaScript
              </div>
              <div className='skills-item'>
                <img src={java} height='100px' width='80px' className='about-links'/>
                <br/>Java
              </div>

            </div>
            </div>
            <div className='skills-main'>
              
              <div className='skills-box'>
                        
                    <div className='skills-heading'>
                          Programming
                          <br/>
                          <span className='skills-heading-color-2'>
                            Languages
                          </span>
                    </div>
                    </div>
              <div className='skills-box'>
                        <div className='skills-item'>
                        <img src={python} height='60px' width='60px' className='about-links'/>
                        <br/>Python
                      </div>
                      <div className='skills-item'>
                        <img src={cpp} height='60px' width='60px' className='about-links'/>
                        <br/>C++
                      </div>
                      <div className='skills-item'>
                        <img src={javascript} height='60px' width='60px' className='about-links'/>
                        <br/>JavaScript
                      </div>
                      <div className='skills-item'>
                        <img src={java} height='100px' width='80px' className='about-links'/>
                        <br/>Java
                      </div>
                    </div>
                    </div>

            <div className='skills-main'>
              
      <div className='skills-box'>
                
            <div className='skills-heading'>
                  Programming
                  <br/>
                  <span className='skills-heading-color-3'>
                    Languages
                  </span>
            </div>
            </div>
      <div className='skills-box'>
                <div className='skills-item'>
                <img src={python} height='60px' width='60px' className='about-links'/>
                <br/>Python
              </div>
              <div className='skills-item'>
                <img src={cpp} height='60px' width='60px' className='about-links'/>
                <br/>C++
              </div>
              <div className='skills-item'>
                <img src={javascript} height='60px' width='60px' className='about-links'/>
                <br/>JavaScript
              </div>
              <div className='skills-item'>
                <img src={java} height='100px' width='80px' className='about-links'/>
                <br/>Java
              </div>
            </div>
            </div>
            <div className='skills-main'>
              
      <div className='skills-box'>
                
            <div className='skills-heading'>
                  Programming
                  <br/>
                  <span className='skills-heading-color-4'>
                    Languages
                  </span>
            </div>
            </div>
      <div className='skills-box'>
                <div className='skills-item'>
                <img src={python} height='60px' width='60px' className='about-links'/>
                <br/>Python
              </div>
              <div className='skills-item'>
                <img src={cpp} height='60px' width='60px' className='about-links'/>
                <br/>C++
              </div>
              <div className='skills-item'>
                <img src={javascript} height='60px' width='60px' className='about-links'/>
                <br/>JavaScript
              </div>
              <div className='skills-item'>
                <img src={java} height='100px' width='80px' className='about-links'/>
                <br/>Java
              </div>
            </div>
            </div>
                    
            
        </motion.div>
    </ChakraProvider>
    </div>
    </div>
  )
}

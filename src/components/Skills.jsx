import React from 'react'
import angular from "./media/angular.png"
import C from "./media/C.png"
import cpp from "./media/cpp.webp"
import docker from "./media/docker.png"
import git_blue from "./media/git_blue.png"
import html from "./media/html.png"
import sklearn from "./media/sklearn.png"
import java from "./media/java.png"
import css from "./media/css.svg"
import next from "./media/next.png"
import node from "./media/node.png"
import matplotlib from "./media/matplotlib.png"
import pandas from "./media/pandas.png"
import numpy from "./media/numpy.png"
import express from "./media/express.png"
import python from "./media/python.png"
import react from "./media/react.png"
import tailwind from "./media/tailwind.png"
import javascript from "./media/javascript.png"
import tensorflow from "./media/tensorflow.png"
import mongo from "./media/mongo.png"
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
        duration: 0.3,
        delay: 0
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
                <img loading='lazy' src={python} height='60px' width='60px' className='skills-links'/>
                <br/>Python
              </div>
              <div className='skills-item'>
                <img loading='lazy'  src={cpp} height='60px' width='60px' className='skills-links'/>
                <br/>C++
              </div>
              <div className='skills-item'>
                <img loading='lazy'  src={javascript} height='60px' width='60px' className='skills-links'/>
                <br/>JavaScript
              </div>
              <div className='skills-item'>
                <img loading='lazy'  src={java} height='60px' width='64px' className='skills-links'/>
                <br/>Java
              </div>

      </div>

            </div>
      </motion.div>
            <motion.div
      initial={{ y: -100, opacity: 0, scale: 1 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        delay: 0.1
      }}>
            <div className='skills-main'>
              
              <div className='skills-box'>
                        
                    <div className='skills-heading'>
                          Artifical
                          <br/>
                          <span className='skills-heading-color-2'>
                          Intelligence
                          </span>
                    </div>
                    </div>
              <div className='skills-box'>
                        <div className='skills-item'>
                        <img src={torch} loading='lazy'  height='60px' width='60px' className='skills-links'/>
                        <br/>PyTorch
                      </div>
                      <div className='skills-item'>
                        <img src={numpy} loading='lazy'  height='60px' width='60px' className='skills-links'/>
                        <br/>Numpy
                      </div>
                      <div className='skills-item'>
                        <img src={tensorflow} loading='lazy' height='60px' width='60px' className='skills-links'/>
                        <br/>TensorFlow
                      </div>
                      <div className='skills-item'>
                        <img src={sklearn} loading='lazy' height='120px' width='110px' className='skills-links'/>
                        <br/>Sci-kit Learn
                      </div>
                      <div className='skills-item'>
                        <img src={matplotlib} loading='lazy' height='60px' width='60x' className='skills-links'/>
                        <br/>Matplotlib
                      </div>
                    </div>
                    </div>
                    </motion.div>
                    <motion.div
      initial={{ y: -100, opacity: 0, scale: 1 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        delay: 0.2
      }}>
            <div className='skills-main'>
              
      <div className='skills-box'>
                
            <div className='skills-heading'>
                  Web
                  <br/>
                  <span className='skills-heading-color-3'>
                  Development
                  </span>
            </div>
            </div>
      <div className='skills-box'>
            <div className='skills-item'>
                <img src={html} height='60px' loading='lazy'  width='70px' className='skills-links' alt=''/>
                <br/>HTML
              </div>
              <div className='skills-item'>
                <img src={css} height='55px' loading='lazy' width='65px' className='skills-links' alt=''/>
                <br/>CSS
              </div>
                <div className='skills-item'>
                <img src={react} height='70px' loading='lazy' width='80px' className='skills-links' alt=''/>
                <br/>React
              </div>
              <div className='skills-item'>
                <img src={node} height='70px' loading='lazy' width='70px' className='skills-links' alt=''/>
                <br/>node.js
              </div>
              <div className='skills-item'>
                <img src={angular} height='70px' loading='lazy' width='70px' className='skills-links' alt=''/>
                <br/>AngularJS
              </div>
              <div className='skills-item'>
                <img src={mongo} height='60px' loading='lazy' width='60px' className='skills-links' alt=''/>
                <br/>MongoDB
              </div>
            <div className='skills-item'>
                <img src={express} height='60px' loading='lazy' width='60px' className='skills-links' alt=''/>
                <br/>ExpressJS
              </div>
              <div className='skills-item'>
                <img src={tailwind} height='60px' loading='lazy' width='60px' className='skills-links' alt=''/>
                <br/>Tailwind
              </div>
            </div>
            </div>       
            </motion.div>
             <motion.div
      initial={{ y: -100, opacity: 0, scale: 1 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        delay: 0.3
      }}>
            <div className='skills-main'>

      <div className='skills-box'>
                
            <div className='skills-heading'>
              Software<br/>
                  <span className='skills-heading-color-4'>
                    Development
                  </span>
            </div>
      </div>
      <div className='skills-box'>
                <div className='skills-item'>
                <img src={docker} height='60px' loading='lazy' width='80px' className='skills-links' alt=''/>
                <br/>Docker
              </div>
              <div className='skills-item'>
                <img src={git_blue} height='60px' loading='lazy' width='60px' className='skills-links' alt=''/>
                <br/>GitHub
              </div>
            </div>
            </div>
      <div className='extra-space'>

      </div>
            
        </motion.div>
    </ChakraProvider>
    </div>
    </div>
  )
}

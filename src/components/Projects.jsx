import React from 'react'
import Project from './containers/Project'
import wearingmask from './media/wearingmask.jpg'
import Button from 'react-bootstrap/Button';
import aiwolf from './media/aiwolf.jpg'
import seer from './media/seer.jpg'
import hand from './media/hand.png'
import library from './media/library.jpeg'
import { motion } from 'framer-motion'

export default function Projects() {

  return (

    <div className='main'>
      
        <div className="projects-content">
          <div className='project-main'>

              <motion.div
                initial={{ y: 100, opacity: 0, scale: 1 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  delay: 0,
                  ease: [0, 0.5, 0.2, 1.01]
                }}>
              <div className='projects-box'>
                  <img className='projects-image' src={seer}/>
                    <span className='projects-heading'>
                    S.E.E.R
                      </span><br/><br/>
                    <div className='projects-description'>
                    Predict heatwaves and climate change through a KNN classification model. Made in 2022 as a part of NASSCOMM Grand Academic Challenge hackathon.
                    
                    <br/><br/>
                    Technologies used: <br/>
                    TensorFlow, SkLearn, Flask, FastAPI

                    <br/><br/><br/>
                    <a href='https://GitHub.com/hardikbhatia777/S.E.E.R' className='projects-button'>GitHub</a>
            </div>
           
                  </div> </motion.div>

                  <motion.div
                initial={{ y: 100, opacity: 0, scale: 1 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  delay: 0,
                  ease: [0, 0.5, 0.2, 1.01]
                }}>
                  <div className='projects-box'>
                  <img className='projects-image' src={aiwolf}/>
                    <span className='projects-heading'>
                    DiffusionPalette
                      </span><br/><br/>
                    <div className='projects-description'>
                    Using Stable Diffusion, generate high quality Text-To-Image AI art, locally and for free! <br/>Note: GPU is recommended 
                    
                    <br/><br/>
                    Technologies used: <br/>
                    PyTorch, ReactJS, FastAPI
                    <br/><br/><br/>
                    <a href='https://GitHub.com/hardikbhatia777/StableDiffusion' className='projects-button'>GitHub</a>
                    </div>

                  </div>
                    </motion.div>
                    <motion.div
                initial={{ y: 100, opacity: 0, scale: 1 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  delay: 0,
                  ease: [0, 0.5, 0.2, 1.01]
                }}>
                  <div className='projects-box'>
                  <img className='projects-image' src={hand}/>
                    <span className='projects-heading'>
                    Hand Gesture Navigation
                      </span><br/><br/>
                    <div className='projects-description'>
                    Control vehicles using hand gestures. <br/> Made for rover navigation as a university project. <br/> You can train new custom gestures too!
                    
                    <br/><br/>
                    Technologies used: <br/>
                    TensorFlow, PyTorch, OpenCV
                    <br/><br/><br/>
                    <a href='https://github.com/hardikbhatia777/gesture-recognition' className='projects-button'>GitHub</a>
                    </div>

                  </div>
                      </motion.div>
                      <motion.div
                initial={{ y: 100, opacity: 0, scale: 1 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  delay: 0,
                  ease: [0, 0.5, 0.2, 1.01]
                }}>
                  <div className='projects-box'>
                  <img className='projects-image' src={wearingmask}/>
                    <span className='projects-heading'>
                    Facial Mask Recognition
                      </span><br/><br/>
                    <div className='projects-description'>
                    Deep Learning model for facial mask recognition. <br/> Trained using transfer learning on VGG16. <br/> 
                    
                    <br/><br/>
                    Technologies used: <br/>
                    TensorFlow, SkLearn
                    <br/><br/><br/>
                    <a href='https://github.com/hardikbhatia777/Face-mask-detection' className='projects-button'>GitHub</a>
                    </div>

                  </div>
                  </motion.div>
                  <motion.div
                initial={{ y: 100, opacity: 0, scale: 1 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  delay: 0,
                  ease: [0, 0.5, 0.2, 1.01]
                }}>
                  <div className='projects-box'>
                  <img className='projects-image' src={library}/>
                    <span className='projects-heading'>
                    Librarium
                      </span><br/><br/>
                    <div className='projects-description'>
                    Complete library management system using a MySQL database.  Also my first project.<br/> Everyone starts somewhere :) <br/> 
                    
                    <br/>
                    Technologies used: <br/>
                    Python, SQL
                    <br/><br/><br/>
                    <a href='https://github.com/hardikbhatia777/Library-management-system' className='projects-button'>GitHub</a>
                    </div>

                  </div>
                  </motion.div>
          </div>
          
        </div>
    </div>
  )
}

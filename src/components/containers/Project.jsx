import React from 'react'

export default function Project(props) {
  return (

    <div className='projects-box'>
        <img className='projects-image' src={props.image}/>
      <span className='projects-heading'>
        {props.name}
      </span><br/><br/>
      <span className='projects-description'>
        {props.description}
      </span>
    </div>
  )
}

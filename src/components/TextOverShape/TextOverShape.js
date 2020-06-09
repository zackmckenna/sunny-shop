import React from 'react'
import './TextOverShape.css'

const TextOverIcon = ({ text, shape, color }) => {
  return (
  <div className='text-over-icon-container'>
    <span style={{ backgroundColor: `${color}` }} className={`css-shape ${shape}`}/>
    <h1>{text}</h1>
  </div>
  )
}

export default TextOverIcon

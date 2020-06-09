import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './TextOverIcon.css'

const TextOverIcon = ({ text, icon, color }) => {
  return (
  <div className='text-over-icon-container'>
    <FontAwesomeIcon style={{ color: `${color}` }} className="orange-circle" icon={icon}/>
    <h1>{text}</h1>
  </div>
  )
}

export default TextOverIcon

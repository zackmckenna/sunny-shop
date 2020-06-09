import React from 'react'
import './Logo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons'


const Logo = () => {
  return (
    <div className='logo-div'>
      <h1 className='logo-text sunny'>sunny</h1>
      <h1 className='logo-text sunday'>sunday</h1>
    </div>
  )
}

export default Logo

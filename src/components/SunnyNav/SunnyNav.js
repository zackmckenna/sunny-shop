import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../Logo/Logo'

const SunnyNav = () => {
  return (
    <Nav className="navbar justify-content-center alert-dismissible" activeKey="/home">
      <Nav.Item>
        <Nav.Link>
          <Link to="/">home</Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>
          <Link to="/about">about</Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>
          <Link to='/contact'>contact</Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>
          <Link to='/shop'>shop</Link>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default SunnyNav

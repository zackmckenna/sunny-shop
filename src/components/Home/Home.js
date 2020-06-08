import React from 'react'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import emilyPic from '../../pictures/em-2.jpg'
import jewleryPic from '../../pictures/ss-1.jpg'
import jewleryPic2 from '../../pictures/ss-3.jpg'
import jewleryPic3 from '../../pictures/ss-4.jpg'

import './Home.css'

const Home = () => {
  return (
    <>
      <Container className='home-container text-center'>
        <Row className='home-section align-items-center'>
          <Col><h1>Hey, I'm Emily</h1></Col><Col><Image className='emilyPic' rounded fluid src={emilyPic}></Image></Col>
        </Row>
        <Row className='home-section align-items-center'>
          <Col><Image  className='jewleryPic' rounded fluid  src={jewleryPic}></Image></Col><Col><h2>and I make awesome jewlery</h2></Col>
        </Row>
        <Row className='home-section align-items-center'>

        </Row>
      </Container>
    </>
  )
}

export default Home;

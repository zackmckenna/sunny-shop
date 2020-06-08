import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import emilyPic from '../../pictures/em-2.jpg'
import jewleryPic from '../../pictures/ss-1.jpg'

import './Home.css'

const Home = () => {
  return (
    <>
      <Container className='home-container text-center'>
        <Row className='align-items-center'>
          <Col><h1>Hey, I'm Emily</h1></Col><Col><Image className='emilyPic' rounded fluid src={emilyPic}></Image></Col>
        </Row>
        <Row>
          <Col><Image  className='jewleryPic' rounded fluid  src={jewleryPic}></Image></Col>
        </Row>
      </Container>
    </>
  )
}

export default Home;

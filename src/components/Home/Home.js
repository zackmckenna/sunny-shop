import React from 'react'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import emilyPic from '../../pictures/em-2.jpg'
import jewleryPic from '../../pictures/ss-1.jpg'
import jewleryPic2 from '../../pictures/ss-3.jpg'
import jewleryPic3 from '../../pictures/ss-4.jpg'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Home = () => {
  return (
    <>
      <Container fluid className='home-container text-center'>
        <Row className='home-section align-items-center'>
          <div style={{position:'relative'}}>
            <FontAwesomeIcon className="fa" icon={faCircle}/>
          </div>
          <Col sm className='home-section-text'><h1>Hey, I'm Emily</h1></Col><Col><Image className='emilyPic' rounded fluid src={emilyPic}></Image></Col>
        </Row>
        <Row className='home-section align-items-center'>
          <Col sm><Image  className='jewleryPic' rounded fluid  src={jewleryPic}></Image></Col><Col xs className='home-section-text'><h2>and I make awesome jewlery</h2></Col>
        </Row>
        <Row className='home-section align-items-center'>
          <Col sm className='text-center'>
            {/* <h3>check it out</h3> */}
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home;

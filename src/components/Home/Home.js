import React from 'react'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import emilyPic from '../../pictures/em-2.jpg'
import jewleryPic from '../../images/ss-1.jpg'
import jewleryPic2 from '../../images/ss-3.jpg'
import jewleryPic3 from '../../images/ss-4.jpg'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import TextOverShape from '../TextOverShape/TextOverShape'
import TextOverIcon from '../TextOverIcon/TextOverIcon'

const Home = () => {
  return (
    <>
      <Container fluid className='home-container text-center'>
        <Row className='home-section align-items-center'>
          <Col className='home-col'>
            <TextOverShape shape={'dot'} text={`Hey. I'm Emily`} color={'#FFC15E'}/>
          </Col>
          <Col className='home-col' lg><Image className='emilyPic' rounded fluid src={emilyPic}></Image></Col>
        </Row>
        <Row className='home-section align-items-center'>
          <Col className='home-col' lg><Image  className='jewleryPic' rounded fluid  src={jewleryPic}></Image></Col>
          <Col className='home-col' lg>
            <TextOverShape shape={'dot'} text={`and I make awesome jewlery`} color={'#FFC15E'}/>
          </Col>
        </Row>
        <Row className='home-section align-items-center'>
          <Col lg className='home-col text-center'>
            {/* <h3>check it out</h3> */}
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home;

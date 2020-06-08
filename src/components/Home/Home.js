import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import emilyPic from '../../pictures/em-2.jpg'

const Home = () => {
  return (
    <>
      <Container className='mt-4 text-center'>
        <Row className='align-items-center'>
          <Col><h1>Hey, I'm Emily</h1></Col><Col><Image rounded fluid src={emilyPic}></Image></Col>
        </Row>
      </Container>
    </>
  )
}

export default Home;

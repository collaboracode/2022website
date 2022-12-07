
import {
    Container,
    Row,
    Col,
    Button    
  } from 'reactstrap'
import Head from 'next/head'
import Image from 'next/image'

export default function AboutUs() {
    return (
        <>
        <Head>
        <title>the about page</title>
      </Head>

      <Container className="lg-container" >
      <Row className='row'>
        <Col className='' md="12">
        <p>This is an online group for people of all levels of experience. We are about getting together and creating small projects as a team in HTML/CSS/Javascript. Looking for anyone who is interested in gaining tangible experience working together on a software project. If you are involved in a bootcamp, receiving a technological education at a college, self-learning, or would like to give back to your local tech community, we look forward to meeting you and making some fun projects.</p>
        </Col>
      </Row>
      </Container>
      </>
    )
}
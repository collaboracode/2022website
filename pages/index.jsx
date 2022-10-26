import Head from 'next/head'
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardText,
  CardTitle,
  CardBody,
} from 'reactstrap'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>the home page</title>
      </Head>
      <Container className="lg-container" >
        <Row className='row'>
          <Col className='' md="7">
            <Image
              src="/puzzled.png"
              alt="Picture "
              width="2560"
              height="1440"
              layout="responsive"
            />
          </Col>
          <Col md="5">
            <ul>
              <li>Collaborate</li>
              <li>Learn</li>
              <li>bullet 3</li>
              <li>Develop</li>
            </ul>
          </Col>
        </Row>
        <Row className='row'>
          <Col className='bg-primary' md="4">Call to Action</Col>
          <Col className='bg-warning' md="8">About</Col>
        </Row>
        <Row className='row'>
          <Col className='bg-primary' md="12">Featured Projects</Col>
        </Row>
      </Container>
    </>
  )
}

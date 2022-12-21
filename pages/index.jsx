import React, { useState, useEffect } from 'react'

import Head from 'next/head'
// import Image from 'next/image'
import Image from 'next/future/image'
import Slider from '../components/slider'
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardText,
  CardTitle,
  CardBody
} from 'reactstrap'

import styles from '../styles/home.module.scss'
//? should this be moved into the slider component?
const slides = [
  {
    title: "Big Brother App",
    subtitle: "MERN",
    description: "Vote for your favs, or not because it is not live currently",
    image:
      "/big-brother-app.png"
  },
  {
    title: "Tic Tac Toe: Jaggy Edition",
    subtitle: "React",
    description: "Let your rows and columns move",
    image:
      "/tic-tac-toe-jaggy.png"
  },
  {
    title: "Hangman",
    subtitle: "JavaScript",
    description: "A hangman game",
    image:
      "/hangman.png"
  },

];
const getShape = () => {
  const borderShapes = [ // class names
    'radius-one',
    'radius-two',
    'radius-three'
  ]
  return borderShapes[Math.floor(Math.random() * borderShapes.length)]
}
export default function Home() {

  //* does not seem to need to be in state
  // const [borderShape, setBoarderShape] = useState('radius-one')
  // const borderShapes = [ // class names
  //   'radius-one',
  //   'radius-two',
  //   'radius-three'
  // ]
  // useEffect(() => {
  //   setBoarderShape(borderShapes[Math.floor(Math.random() * 3)])
  // }, [])

  return (
    <>
      <Head>
        <title>Collaboracode - Community, Collaboration, Code</title>
      </Head>

      <Container className='lg-container mt-5 main-text'>
        <div
          // id='HeroContainer'
          className={styles.HeroContainer}
        >
          <Image
            // id='HeroBg'
            className={`${styles.HeroBg} next-image`}
            src='/winter.jpg'
            alt='Collaboracode - Community, Collaboration, Code'
            // width="100%"
            // height="100%"
            // layout="responsive"
            layout="raw"
            fill
          />
          <Image
            // id='HeroImg'
            className={styles.HeroImg}
            src="/puzzle_render-1.webp"
            alt="Collaboracode - Community, Collaboration, Code"
            // width="500"
            // height="500"
            // layout="responsive"
            layout="raw"
            fill
          />
        </div>
      </Container>

      <Container tag={"article"} className="lg-container z-10 mt-5" >
        <Row tag={"section"} className={`row ${getShape()} bg-about`}>
          <Col sm="12" md="6" lg="6">
            <h3>What we're about</h3>
            <p>This is an online group for people of all levels of experience. We are about getting together and creating small projects as a team in HTML/CSS/Javascript.
              Looking for anyone who is interested in gaining tangible experience working together on a software project.
              If you are involved in a bootcamp, receiving a technological education at a college, self-learning, or would like to give back to your local tech community, we look forward to meeting you and making some fun projects.
            </p>
          </Col>
          <Col sm="12" md="6" lg="6" className='d-flex justify-content-start align-items-center'>
            <ul>
              <li>Collaborate</li>
              <li>Learn</li>
              <li>Teach</li>
              <li>Develop</li>
              <li>Network</li>
            </ul>
          </Col>
        </Row>

        <Row tag={"section"} className={`d-flex justify-content-center row mt-5 mb-5`}>
          <Col sm="12" md="12" lg="8" className={`${getShape()} bg-featured d-flex justify-content-center align-content-center`}>
            <h4>Please join us each week on Tuesday via Meetup</h4>
            <Row>
              <Col sm="12" md="6">
                <Button className="bg-color-four text-white hover-bg-color-five" onClick={() => {
                  window.open("https://www.meetup.com/collaboracode-sanantonio-tx/", '_blank')
                }}>San Antonio, TX</Button>
              </Col>
              <Col sm="12" md="6">
                <Button className="bg-color-four text-white" onClick={() => {
                  window.open("https://www.meetup.com/collaboracode-danville-ca/", '_blank')
                }}>Danville, CA</Button>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row tag={"section"}>
          <Col className={`bg-featured featured ${getShape()}`} sm="12" md="12">
            <Row className='row justify-content-center text-center'>
              <Col md='8'>
                <h2>Here are some examples of things we've built</h2>
                <ul className='text-left'>
                  <li>This, as in, You are here</li>
                  <li>Big Brother Tracker - Full Stack (App, API)</li>
                  <li>Hangman</li>
                  <li>Tic Tac Toe</li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      {/* I moved this out since it is a centerpiece kind of element so I think it should get to push past the margins
          that the rest of the page/pages follow, which I think enhances the effect*/}
      <Row sm={12} className={`w-100 d-flex justify-content-center`}>
        <Col sm={12} className='d-flex justify-content-center'>
          <Slider slides={slides} />
        </Col>
      </Row>
    </>
  )
}

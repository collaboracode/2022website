import React, { useState, useEffect } from 'react'

import Head from 'next/head'
// import Image from 'next/image'
import Image from 'next/image'
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

import getShape from '../components/getShape'
import Background from '../components/background'
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

export default function Home() {

  return (
    <>
      <Head>
        <title>Collaboracode - Community, Collaboration, Code</title>
      </Head>
      <Background />

      <Container tag={"article"} className="lg-container mt-5" >
        <IntroSection />
        <MeetupSection />
        <ExamplesSection />
      </Container>

      <Container className={styles.featured}>
        <Row sm={12} className={`bg-about d-flex justify-content-center`}>
          <h2>Our featured projects</h2>
        </Row>
      </Container>
      {/* //todo get this to be able to go in the container */}
      <Row sm={12} className={`w-100 d-flex justify-content-center `}>
        <Col sm={12} className='d-flex justify-content-center'>
          <Slider slides={slides} />
        </Col>
      </Row>
    </>
  )
}

function MeetupSection() {
  const [shape, setShape] = useState("radius-one")
  useEffect(() => {
    setShape(getShape())
  },)
  return <Row tag={"section"} className={`d-flex justify-content-center mt-5 mb-5`}>
    <Col sm="12" md="12" lg="8" className={`${shape} bg-featured d-flex flex-column justify-content-center align-content-center text-center`}>
      <h4>Please join us each week on Tuesday via Meetup</h4>
      <a className="btn bg-color-four text-white hover-bg-color-five w-50 mt-2 align-self-center" href='https://www.meetup.com/collaboracode-sanantonio-tx/' target='_blank'>San Antonio, TX</a>
      <a className='btn bg-color-four text-white hover-bg-color-five w-50 mt-2 align-self-center' href='https://www.meetup.com/collaboracode-danville-ca/' target='_blank'>Danville, CA</a>
    </Col>
  </Row>
}

function ExamplesSection() {
  const [shape, setShape] = useState("radius-one")
  useEffect(() => {
    setShape(getShape())
  },)
  return <Row tag={"section"}>
    <Col className={`bg-featured featured ${shape}`} sm="12" md="12">
      <Row className='justify-content-center text-center'>
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
}

function IntroSection() {
  const [shape, setShape] = useState("radius-one")
  useEffect(() => {
    setShape(getShape())
  },)
  return <Row tag={"section"} className={` ${shape} bg-about`}>
    <Col sm="12" md="8" lg="8" >
      <h3 className='text-center'>What we're about</h3>
      <p>This is an online group for people of all levels of experience. We are about getting together and creating small projects as a team in HTML/CSS/Javascript.
        Looking for anyone who is interested in gaining tangible experience working together on a software project.
        If you are involved in a bootcamp, receiving a technological education at a college, self-learning, or would like to give back to your local tech community, we look forward to meeting you and making some fun projects.
      </p>
    </Col>
    <Col sm="12" md="4" lg="4" className='d-flex justify-content-start align-items-center'>
      <ul>
        <li>Collaborate</li>
        <li>Learn</li>
        <li>Teach</li>
        <li>Develop</li>
        <li>Network</li>
      </ul>
    </Col>
  </Row>
}
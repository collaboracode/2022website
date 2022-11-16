import React, { useState, useEffect } from 'react'

import Head from 'next/head'
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

const slides = [
  {
    title: "Machu Picchu",
    subtitle: "Peru",
    description: "Adventure is never far away",
    image:
      "https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
  },
  {
    title: "Chamonix",
    subtitle: "France",
    description: "Let your dreams come true",
    image:
      "https://images.unsplash.com/photo-1581836499506-4a660b39478a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
  },
  {
    title: "Mimisa Rocks",
    subtitle: "Australia",
    description: "A piece of heaven",
    image:
      "https://images.unsplash.com/photo-1566522650166-bd8b3e3a2b4b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
  },
  {
    title: "Four",
    subtitle: "Australia",
    description: "A piece of heaven",
    image:
      "https://images.unsplash.com/flagged/photo-1564918031455-72f4e35ba7a6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
  },
  {
    title: "Five",
    subtitle: "Australia",
    description: "A piece of heaven",
    image:
      "https://images.unsplash.com/photo-1579130781921-76e18892b57b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
  }
];
export default function Home() {

  const [borderShape, setBoarderShape] = useState('radius-one')
  const borderShapes = [ // class names
    'radius-one',
    'radius-two',
    'radius-three'
  ]
  useEffect(() => {
    setBoarderShape(borderShapes[Math.floor(Math.random() * 3)])
  }, [])

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
              <li>Teach</li>
              <li>Develop</li>
              <li>Network</li>
            </ul>
          </Col>
        </Row>
        <Row className='row'>
          <Col md="6">
            <h4>Please join us each week on Tuesday via Meetup</h4>
            <Row>
              <Col md="6">
                <Button className="bg-color-four text-white hover-bg-color-five" onClick={() => {
                  window.open("https://www.meetup.com/collaboracode-sanantonio-tx/", '_blank')
                }}>San Antonio, TX</Button>
              </Col>
              <Col md="6">
                <Button className="bg-color-four text-white" onClick={() => {
                  window.open("https://www.meetup.com/collaboracode-danville-ca/", '_blank')
                }}>Danville, CA</Button>
              </Col>
            </Row>

          </Col>

          <Col md="6">
            <h3>What we're about</h3>
            <p>This is an online group for people of all levels of experience. We are about getting together and creating small projects as a team in HTML/CSS/Javascript.
              Looking for anyone who is interested in gaining tangible experience working together on a software project.
              If you are involved in a bootcamp, receiving a technological education at a college, self-learning, or would like to give back to your local tech community, we look forward to meeting you and making some fun projects.
            </p>
          </Col>
        </Row>
        {/* //? maybe slightly randomize the shape of the backgound */}
        <Row className='row'>
          <Col className={`featured ${borderShape}`} md="12">
            <h2>Here are some examples of things we've built</h2>
            <ul>
              <li>This, as in, You are here</li>
              <li>Big Brother Tracker - Full Stack (App, API)</li>
              <li>Hangman</li>
              <li>Tic Tac Toe</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col><Slider slides={slides} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

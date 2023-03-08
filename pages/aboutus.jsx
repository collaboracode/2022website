
import {
  UncontrolledCarousel,
  Container,
  Row,
  Col,
  Button,
  Spinner
} from 'reactstrap'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/aboutus.module.scss'
import getShape from '../components/getShape'
import Background from '../components/background'

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>The About Page</title>
      </Head>
      <Background />
      <Container className="lg-container page-container">
        {/* 
        //? Not sure how it sounds to you guys, but maybe we could have pictures of the members and a brief blurb
        //? and on click scroll to the member tile, or maybe scrap that and have each member have a full about page,
        //? which it goes to instead.
        */}
        {/* <UncontrolledCarousel
          items={[
            {
              altText: 'Slide 1',
              caption: 'Slide 1',
              key: 1,
              src: 'https://picsum.photos/id/123/1200/600'
            },
            {
              altText: 'Slide 2',
              caption: 'Slide 2',
              key: 2,
              src: 'https://picsum.photos/id/456/1200/600'
            },
            {
              altText: 'Slide 3',
              caption: 'Slide 3',
              key: 3,
              src: 'https://picsum.photos/id/678/1200/600'
            }
          ]}
        /> */}


        {/* <Row className='bg-about'>
          <Col className='text-center' md="12">
            <p>This is an online group for people of all levels of experience. We are about getting together and creating small projects as a team in HTML/CSS/Javascript. Looking for anyone who is interested in gaining tangible experience working together on a software project. If you are involved in a bootcamp, receiving a technological education at a college, self-learning, or would like to give back to your local tech community, we look forward to meeting you and making some fun projects.</p>
            <Spinner
              color="dark"
              style={{
                height: '3rem',
                width: '3rem'
              }}
            >
              Loading...
            </Spinner>
            <p>Excuse the loading symbol. No page is loading. This page is under renovation.</p>
          </Col>
        </Row> */}
        <Row sm={12} className={`${styles.header} bg-about d-flex justify-content-center`}>
          <h2>Our Team members</h2>
        </Row>
        <Row className={styles.members}>
          <Col sm={12} md={5} lg={3} className={`${getShape()} bg-featured`}>
            <h3>Matt Au</h3>
            <p>I am software consultant that works in a few languages. I enjoy solving problems and sharing my knowledge with others.</p>
            <a className='mr-2' href="https://github.com/45acpUSA">GitHub</a>
            <a className='ml-2' href="https://www.linkedin.com/in/mau/">LinkedIn</a>
          </Col>
          <Col sm={12} md={5} lg={3} className={`${getShape()} bg-featured`}>
            <h3>Albert Arias</h3>
            <p>Hi there, I am looking to make a change into a web development career. Enjoy spending time learning everyday. </p>
            <a className='mr-2' href="https://github.com/wild-o">GitHub</a>
            <a className='ml-2' href="https://www.linkedin.com/in/albert-arias">LinkedIn</a>
          </Col>
          <Col sm={12} md={5} lg={3} className={`${getShape()} bg-featured`}>
            <h3>Derek Galen</h3>
            <p>I do contract software development in a few languages. Enjoying meeting new people, helping build things, solving problems that others are encountering.</p>
            <a className='mr-2' href="https://github.com/dgalen">GitHub</a>
            <a className='ml-2' href="https://www.linkedin.com/in/derek-galen">LinkedIn</a>
          </Col>
          <Col sm={12} md={5} lg={3} className={`${getShape()} bg-featured`}>
            <h3>Michael Kielpinski</h3>
            <p>
              I am a self taught web developer, and still I have much to learn still, but that will never change there is always so much to learn,
              and you can't know everything, but with enough determination you can surprize yourself.
            </p>
            <a className='mr-2' href="https://github.com/S0UPernova">GitHub</a>
            <a className='ml-2' href="https://www.linkedin.com/in/michael-kielpinski-2a7019202/">LinkedIn</a>
          </Col>
          <Col sm={12} md={5} lg={3} className={`${getShape()} bg-featured`}>
            <h3>Jeff Harm</h3>
            <p>
              I am working through the Thinkful Engineering program, and joined Collaboracode to practice more and learn <em>blazingly faster!</em>
            </p>
            <a className='mr-2' href="https://github.com/jeffjeffjeffh">GitHub</a>
            <a className='ml-2' href="https://www.linkedin.com/in/jeff-harm-b201921b4/">LinkedIn</a>
          </Col>
          <Col sm={12} md={5} lg={3} className={`${getShape()} bg-featured`}>
            <h3>Rich Murphy</h3>
            <p>
              I am working on deploying my own website to improve my coding abilities. This group has been supportive throughout my journey and has answered many questions both on the front and backend.  
            </p>
          </Col>
        </Row>
      </Container>
    </>




  )
}

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
        <UncontrolledCarousel
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
        />


        <Row className='bg-about'>
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
        </Row>
        <Row>
          <h2>Our Team members</h2>
        </Row>
        <Row className={styles.members}>
          <Col sm={12} md={5} lg={3} className={`${getShape()} bg-featured`}>
            <h3>member name</h3>
            <p>about this member</p>
            <a className='mr-2' href="#">GitHub</a>
            <a className='ml-2' href="#">linkenIn</a>
          </Col>
          <Col sm={12} md={5} lg={3} className={`${getShape()} bg-featured`}>
            <h3>member name</h3>
            <p>about this member</p>
            <a className='mr-2' href="#">GitHub</a>
            <a className='ml-2' href="#">linkenIn</a>
          </Col>
          <Col sm={12} md={5} lg={3} className={`${getShape()} bg-featured`}>
            <h3>member name</h3>
            <p>about this member</p>
            <a className='mr-2' href="#">GitHub</a>
            <a className='ml-2' href="#">linkenIn</a>
          </Col>
          <Col sm={12} md={5} lg={3} className={`${getShape()} bg-featured`}>
            <h3>member name</h3>
            <p>about this member</p>
            <a className='mr-2' href="#">GitHub</a>
            <a className='ml-2' href="#">linkenIn</a>
          </Col>
        </Row>
      </Container>
    </>




  )
}
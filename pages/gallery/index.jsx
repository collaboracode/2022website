import { Col, Row, Card, CardBody, CardSubtitle, CardText, CardTitle, CardFooter, Container } from "reactstrap"
import Image from 'next/image'
import styles from "../../styles/gallery.module.scss"
import Background from "../../components/background"
export default function Gallery({ Component, pageProps, projects }) {

  return (
    <>
      <Background />
      {/* <div className='page-container'> */}
        <Container>
          <Row>
            <Col>
              <span className="">

                <h1 className="text-center mb-5 bg-about">Hello, and welcome to our project gallery</h1>
              </span>
              {projects ? projects.map((project, i) => {
                const {
                  id,
                  mainImage,
                  title,
                  subtitle,
                  description,
                  text,
                  gitHubLink
                } = project
                return (
                  <Row key={id} sm={12} className={`justify-content-center mt-5 mb-5`}>
                    <Col sm={12} className={`mt-5 mb-5`}>
                      <Card className={`${styles.card}`}>
                        {/* //todo make this an array of images, and make it a bootstrap carousel */}
                        {/* //todo add onclick to go to page dedicated to the project with list of collaborators for the project */}
                        {mainImage?.link && mainImage?.width && mainImage?.height && <Image
                          src={mainImage.link}
                          alt="Picture "
                          width={mainImage.width}
                          height={mainImage.height}
                          layout="responsive"
                        />}
                        <CardBody className={styles.cardBody}>
                          {title && <CardTitle tag={'h2'}>{title}</CardTitle>}
                          {subtitle && <CardSubtitle tag={'h4'} className={`mb-2`}>{subtitle}</CardSubtitle>}
                          {description && <CardText tag={'p'} className={styles.description}>{description}</CardText>}
                          {text && <CardText className={`${styles.cardText}`}>{text}</CardText>} {/*//! this is an example of how to use the styles in the module */}
                        </CardBody>
                        <CardFooter>
                          {/* //todo make an object keys are titles, and values are links */}
                          {gitHubLink && <a href={gitHubLink} target={'_blank'}>GitHub</a>}
                        </CardFooter>
                      </Card>
                    </Col>
                  </Row>
                )
              }) : null}
            </Col>

          </Row>
        </Container>
      {/* </div> */}
    </>
  )
}

export async function getStaticProps() {
  const projects = [ //? maybe add external source for data
    {
      id: 1,
      mainImage: { link: '/tic-tac-toe-jaggy.png', width: "2560", height: '1440' }, // todo make this an array of image objects
      title: "Tic-Tac-Toe: Jaggy Edition",
      subtitle: "-- React",
      description: "tic tac toe, with a twist... or rather a shift",
      text: 'This project uses inline styles using objects, which makes programmatically setting styles a little easier',
      gitHubLink: '#', // make array, and loop through them
    },
    {
      id: 2,
      mainImage: { link: '/big-brother-app.png', width: "2560", height: '1440' },
      title: "Big Brother",
      subtitle: "-- React/Express",
      description: "Meant to allow users to vote on their favorite Houseguests",
      text: 'React frontend with Express NodeJs backend with mongoDB',
      gitHubLink: '#',
    },
    {
      id: 3,
      mainImage: { link: '/hangman.png', width: "2560", height: '1440' },
      title: "Hangman",
      subtitle: "-- JavaScript",
      description: "Hangman game in JavaScript",
      text: "A simple javascript game of hangman, random word pulled from Random Word API: https://random-word-api.herokuapp.com/home",
      gitHubLink: '#',
    }
  ]
  return {
    props: {
      projects,
    },
  }
}
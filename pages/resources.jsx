import Head from 'next/head'
import { Button, ButtonGroup, Media, Card, CardBody, CardGroup, CardTitle, CardSubtitle, CardText, CardImg, Container } from 'reactstrap';
import Image from 'next/image'
import styles from '../styles/resources.module.scss'
export default function Resources() {
  return (

    <Container>
      {/*Below is the testing of the Card Group component*/}
      <h2 className={styles.Heading}>
        <span className={styles.Declaration}>var </span>
        <span className={styles.FnName}>beginner </span>
        <span className={styles.Assignment}>= </span>
        <span className={styles.ParenAndBrace}>() </span>
        <span className={styles.Arrow}>{'=> '}</span>
        <span className={styles.ParenAndBrace}>{'{'}</span>
      </h2>
      <CardGroup className={styles.CardGroup}>
        <Card className={styles.Card}>
          <CardImg
            alt="Card image cap"
            src="https://avatars.githubusercontent.com/u/49552305?s=280&v=4"
            top
            height="50%"
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">
              Javascript.info
            </CardTitle>

            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >

            </CardSubtitle>
            <CardText>
              Like riding a bicycle, perfecting this stance requires grace, steadiness, and tight shorts
            </CardText>
            <Button>
              Button
            </Button>
          </CardBody>
        </Card>
        <Card className={styles.Card}>
          <CardImg
            alt="Card image cap"
            src="https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM0fHxjb21wdXRlciUyMHByb2dyYW1taW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            top
            height="50%"
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">
              Innovation
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              Peanut + Butter = ?
            </CardSubtitle>
            <CardText>
              The simple stance reflects one of life's fiercest--and greatest--sports: channel surfing
            </CardText>
            <Button>
              Button
            </Button>
          </CardBody>
        </Card>
        <Card className={styles.Card}>
          <CardImg
            alt="Card image cap"
            src="https://images.unsplash.com/photo-1508625935447-e0ebc2cdf6bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
            top
            height="50%"
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">
              Community
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              Welcome to the workspace
            </CardSubtitle>
            <CardText>
              To crush is also to create, and from squashing comes spice. Stay vigilant. The battle for seconds is always sudden and fierce
            </CardText>
            <Button>
              Button
            </Button>
          </CardBody>
        </Card>
      </CardGroup>
      <h2 className={styles.Heading}><span className={styles.ParenAndBrace}>{'}'}</span></h2>
      <h2 className={styles.Heading}>
        {/* {'let intermediate = () => {'} */}
        <span className={styles.Declaration}>let </span>
        <span className={styles.FnName}>intermediate </span>
        <span className={styles.Assignment}>= </span>
        <span className={styles.ParenAndBrace}>() </span>
        <span className={styles.Arrow}>{'=> '}</span>
        <span className={styles.ParenAndBrace}>{'{'}</span>
      </h2>

      <h2 className={styles.Heading}><span className={styles.ParenAndBrace}>{'}'}</span></h2>

      <h2 className={styles.Heading}>
        {/* {'const advanced = _ => {'} */}
        <span className={styles.Declaration}>const </span>
        <span className={styles.FnName}>advanced </span>
        <span className={styles.Assignment}>= </span>
        <span className={styles.ParenAndBrace}>() </span>
        <span className={styles.Arrow}>{'=> '}</span>
        <span className={styles.ParenAndBrace}>{'{'}</span>
      </h2>
      <h2 className={styles.Heading}><span className={styles.ParenAndBrace}>{'}'}</span></h2>
      <h2 className={`${styles.Heading} ${styles.Comment}`}>{'// Miscellaneous'}</h2>
    </Container>
  )


}
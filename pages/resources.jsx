import Head from 'next/head'
import { Button, ButtonGroup, Media, Card, CardBody, CardGroup, CardTitle, CardSubtitle, CardText, CardImg, Container } from 'reactstrap';
// import Image from 'next/image'
import styles from '../styles/resources.module.scss'
import Resource from '../components/resource';

export default function Resources() {
  return (

    <Container className='page-container'>
      {/*Below is the testing of the Card Group component*/}
      <h2 className={styles.Heading}>
        <span className={styles.Declaration}>var </span>
        <span className={styles.FnName}>beginner </span>
        <span className={styles.Assignment}>= </span>
        {/* <span className={styles.ParenAndBrace}>() </span> */}
        {/* <span className={styles.Arrow}>{'=> '}</span> */}
        <span className={styles.ParenAndBrace}>{'['}</span>
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
      <h2 className={styles.Heading}><span className={styles.ParenAndBrace}>{']'}</span></h2>

      <h2 className={styles.Heading}>
        {/* {'let intermediate = () => {'} */}
        <span className={styles.Declaration}>let </span>
        <span className={styles.FnName}>intermediate </span>
        <span className={styles.Assignment}>= </span>
        {/* <span className={styles.ParenAndBrace}>() </span> */}
        {/* <span className={styles.Arrow}>{'=> '}</span> */}
        <span className={styles.ParenAndBrace}>{'['}</span>
      </h2>
      <CardGroup>
        <Resource
          imgAlt={"Card image cap"}
          imgSrc={"https://images.unsplash.com/photo-1508625935447-e0ebc2cdf6bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"}
          title={"Community"}
          subTitle={"Welcome to the workspace"}
          text={"To crush is also to create, and from squashing comes spice. Stay vigilant. The battle for seconds is always sudden and fierce"}
          link={"#"}
        />
        <Resource 
        imgAlt="React"
        imgSrc="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
        title="React Learn"
        subTitle="Modern React Documentation"
        text=""
        link="https://beta.reactjs.org/learn"
        />
      </CardGroup>
      <h2 className={styles.Heading}><span className={styles.ParenAndBrace}>{']'}</span></h2>

      <h2 className={styles.Heading}>
        {/* {'const advanced = _ => {'} */}
        <span className={styles.Declaration}>const </span>
        <span className={styles.FnName}>advanced </span>
        <span className={styles.Assignment}>= </span>
        {/* <span className={styles.ParenAndBrace}>() </span> */}
        {/* <span className={styles.Arrow}>{'=> '}</span> */}
        <span className={styles.ParenAndBrace}>{'['}</span>
      </h2>
      <h2 className={styles.Heading}><span className={styles.ParenAndBrace}>{']'}</span></h2>
      <h2 className={`${styles.Heading} ${styles.Comment}`}>{'// Miscellaneous'}</h2>
    </Container>
  )


}
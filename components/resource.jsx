import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/resources.module.scss'
import { Button, ButtonGroup, Media, Card, CardBody, CardGroup, CardTitle, CardSubtitle, CardText, CardImg, Container, Col } from 'reactstrap';

export default function Resource({ imgAlt, imgSrc, title, subTitle, text, link }) {
  return (
    <Col className={styles.cardCol} md={3}> 
      <Card className={styles.Card}>
        <CardImg
          alt={imgAlt}
          src={imgSrc}
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5">
            <a href={link} /* target="_blank" */>{title}</a>
          </CardTitle>

          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
          >
            {subTitle}
          </CardSubtitle>
          <CardText>
            {text}
          </CardText>
        </CardBody>
      </Card>
    </Col>

  )
}

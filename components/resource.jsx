import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/resources.module.scss'
import { Button, ButtonGroup, Media, Card, CardBody, CardGroup, CardTitle, CardSubtitle, CardText, CardImg, Container } from 'reactstrap';

export default function Resource({ imgAlt, imgSrc, title, subTitle, text, link }) {
    return (
        <Card className={styles.Card}>
          <Link href={link}><CardImg
            alt={ imgAlt}
            src={ imgSrc }
            top
            height="50%"
            width="100%"
          /></Link>
          <CardBody>
            <CardTitle tag="h5">
              <a href={ link } target="_blank">{ title }</a>
            </CardTitle>

            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
            { subTitle }
            </CardSubtitle>
            <CardText>
              { text }
            </CardText>
          </CardBody>
        </Card>
    )
}

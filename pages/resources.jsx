import Head from 'next/head'
import { Button, ButtonGroup, Media, Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';
import Image from 'next/image'


export default function Resources() {
  return (
    <div>
      <Card className="my-2">
        <CardBody>
          <CardTitle tag="h5"><a href="http://javascript.info">
            JavaScript.info</a>
          </CardTitle>
          <CardText>
            The Modern JavaScript Tutorial
            How it's done now. From the basics to advanced topics with simple, but detailed explanations.
          </CardText>

        </CardBody>
        <div className='img-parent'>
          <CardImg
            alt="Card image cap"
            bottom
            src="https://avatars.githubusercontent.com/u/49552305?s=280&v=4"
            className='resource-image'
          />
        </div>
      </Card>
    </div>
  )


}
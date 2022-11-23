import Head from 'next/head'
import { Button, ButtonGroup, Media, Card, CardBody, CardGroup, CardTitle, CardSubtitle, CardText, CardImg } from 'reactstrap';
import Image from 'next/image'


export default function Resources() {
  return (

    <>
      {/*Below is the testing of the Card Group component*/}

      <CardGroup>
        <Card>
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
        <Card>
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
        <Card>
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
    </>
  )


}
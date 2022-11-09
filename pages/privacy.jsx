import Head from 'next/head'
import Image from 'next/image'
import { Container } from 'reactstrap'

export default function Privacy() {
    return (
      <>
      <Container className='mt-5 mb-5'>

      All your data are belong to us
      <Image
              src="/tic-tac-toe-jaggy.png"
              alt="Picture "
              width="2560"
              height="1440"
              layout="responsive"
              className="bordered"
      />
      <Image
        src="/big-brother-app.png"
        alt="Picture "
        width="2560"
        height="1440"
        layout="responsive"
        className="bordered"
      />
      </Container>
      </>
    )
}
import Head from 'next/head'
import Image from 'next/image'
import { Container, Row } from 'reactstrap'

export default function Privacy() {
  return (
    <>
      <Container>
        <Row sm={12}>

          <iframe className='mt-8 w-100 vh-75' id='privacy-policy' src='privacy-preview.html'></iframe>
        </Row>


        All your data are belong to us
      </Container>
    </>
  )
}
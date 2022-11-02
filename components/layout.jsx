import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import {
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Button
} from "reactstrap"

export default function Layout({ children }) {
  const { asPath } = useRouter()

  const [mailingModal, setMailingModal] = useState(false);
  const [contactModal, setContactModal] = useState(false);

  const [email, setEmail] = useState('');
  const [emailbody, setEmailbody] = useState('');

  const mailingToggle = () => setMailingModal(!mailingModal);
  const contactToggle = () => setContactModal(!contactModal);
  const handleChange = (e) => {
    let field = e.target.name;  // can also be e.target.id if id & name are the same for the input
    let val = e.target.value;

    switch (field.toUpperCase()) {
      case 'EMAIL':
        setEmail(val);
        break;
      case 'EMAILBODY':
        setEmailbody(val);
        break;
    }
  }
  const handleClick = (e) => {

  }

  const testPath = (route) => {
    const rgx = new RegExp(
      `^\/${route}?(?![a-z])(?![0-9])`//, // regex to check the begining of the path
      //'i' //? do we actually want it to not be case sensitive?
    )
    return rgx.test(asPath)
  }
  return (
    <>
      <nav>
        <Nav
          card
          pills
          className="justify-content-center ml-0 mr-0 mt-1"
        >
          <NavItem
            className='logo'
          >
            <NavLink
              href="/"
            >
              CollaboraCode
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="/"
              active={asPath === "/"}
            >
              Home
            </NavLink>
          </NavItem>
        </Nav>
      </nav>
      <div>{children}</div>
      <footer className="cntr-footer">
        <Modal isOpen={mailingModal} toggle={mailingToggle}>
          <ModalHeader>Mailing List Signup</ModalHeader>
          <ModalBody></ModalBody>
        </Modal>
        <Modal isOpen={contactModal} toggle={contactToggle}>
          <ModalHeader>Contact</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for='email'>Email</Label>
                <Input id='email' name='email' onChange={handleChange} placeholder='Email' type='email' value={email} />
                
              </FormGroup>
              <FormGroup>
                <Label for='emailbody'>Your Message</Label>
                <Input id='emailbody' name='emailbody' onChange={handleChange} placeholder="Your Message" type='textarea' value={emailbody} />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
              <Button color='primary' onClick={handleClick}>Submit</Button>
          </ModalFooter>
        </Modal>
        <Container>
          <Row>
            <Col sm="12" md="4">
              <ul className="list-unstyled">
                <li><strong>Register to Join us on Meetup</strong></li>
                <li><Link href="https://www.meetup.com/collaboracode-sanantonio-tx/" passHref><a target="_blank">San Antonio, TX</a></Link></li>
                <li><Link href="https://www.meetup.com/collaboracode-danville-ca/" passHref><a target="_blank">Danville, CA</a></Link></li>
              </ul>
            </Col>
            <Col sm="12" md="4"></Col>
            <Col sm="12" md="4">
              <ul className="list-unstyled">
                <li><Link href="privacy">Privacy Policy</Link></li>
                <li><a href="#" className='disabled' onClick={mailingToggle}>Mailing List</a></li>
                <li><a href="#" onClick={contactToggle}>Contact Us</a></li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col>
              {/* <a
          href="https://vercel.com?filter=next.js&utm_source=github&utm_medium=example&utm_campaign=next-example"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="sml-logo" />
        </a> */}<p className='powered'>Powered by Collaboration</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}
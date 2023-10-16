import React, {useState} from "react"

import Link from 'next/link'

import {
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
  Button,
} from "reactstrap"

export default function Footer() {
  const [mailingModal, setMailingModal] = useState(false);
  const [contactModal, setContactModal] = useState(false);
  const [email, setEmail] = useState('');
  const [emailbody, setEmailBody] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const mailingToggle = () => setMailingModal(!mailingModal);
  const contactToggle = () => setContactModal(!contactModal);

  const isEmail = (email) => {
    // const emx = new RegExp(`^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$`, 'i');
    const emx = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm;
    return emx.test(email);
  }
  
  const handleChange = (e) => {
    let field = e.target.name;  // can also be e.target.id if id & name are the same for the input
    let val = e.target.value;

    switch (field.toUpperCase()) {
      case 'EMAIL':
        setEmail(val);
        break;
      case 'EMAILBODY':
        setEmailBody(val);
        break;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && emailbody && isEmail(email)) {
      window.grecaptcha.ready(() => {
        window.grecaptcha
          .execute(RecaptchaSiteKey, { action: 'submit' })
          .then(async token => {
            setEmailSubmitted(true);
            console.log('Captcha Token: ' + token);
            if (token) {
              fetch("https://rynwv8e0q9.execute-api.us-west-2.amazonaws.com/v1/contactform", {
                method: "POST",
                body: JSON.stringify({ "email": email, "emailbody": emailbody, "g-recaptcha-response": token }),
                headers: {
                  "Accept": "application/json",
                  'Content-Type': 'application/json'
                }
              })
                .then(res => {
                  console.log(res);
                })
                .then(data => {
                  console.log(data)
                  setEmailSubmitted(false);
                })
                .then(() => {
                  setEmail("");
                  setEmailBody("");
                })
                .catch(err => {
                  console.error(err);
                  setEmailSubmitted(false);
                })
            } else {
              console.log('Act more human');
              alert("We're sorry please act more human and attempt to submit again");
              setEmailSubmitted(false);
            }
          });
      });
    }
  }
  
  return (
    <footer className="cntr-footer">
      <Modal isOpen={mailingModal} size='lg' toggle={mailingToggle}>
        <ModalHeader toggle={mailingToggle}>Mailing List Signup</ModalHeader>
        <ModalBody><iframe width={540} height={405} src="https://d82cd204.sibforms.com/serve/MUIEAMhd06PZmM9TKBBxGZ4OF0a8uQtsfgBk8c1CiGlO7qyGFRQguNedxsP5wxDG7l-_0O6FuS09nbun86o-GYseQi9PPdLZJORQYy3u4wnV9t5BMElW5Pjoj3nWFMfMjaWesLKaev50S7iPGG3Peij7oXgV7spphrVEPE-oWAPuEGxxMa0KgBNIGr9dFWM5YNJx728mZZrh230-" style={{ display: 'block', marginLeft: 'auto', margin: 'auto', maxWidth: '100%' }}></iframe></ModalBody>
      </Modal>
      <Modal isOpen={contactModal} toggle={contactToggle}>

        <Form onSubmit={handleSubmit}>
          <ModalHeader toggle={contactToggle}>Contact</ModalHeader>
          <ModalBody>

            <FormGroup>
              <Label for='email'>Email</Label>
              <Input id='email' name='email' onChange={handleChange} placeholder='Email' type='email' value={email} />

            </FormGroup>
            <FormGroup>
              <Label for='emailbody'>Your Message</Label>
              <Input id='emailbody' name='emailbody' onChange={handleChange} placeholder="Your Message" type='textarea' value={emailbody} />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color='primary' disabled={emailSubmitted} onClick={handleSubmit}>Submit</Button>
          </ModalFooter>
        </Form>
      </Modal>
      <Container>
        <Row className='mb-0 mt-1'>
          <Col sm="12" md="4">
            <ul className="list-unstyled text-center">
              <li className='footerSectionHeading'><strong>Register to Join us on Meetup</strong></li>
              <li><Link href="https://www.meetup.com/collaboracode-sanantonio-tx/" passHref>San Antonio, TX</Link></li>
              <li><Link href="https://www.meetup.com/collaboracode-danville-ca/" passHref>Danville, CA</Link></li>
            </ul>
          </Col>
          <Col sm="12" md="4"></Col>
          <Col sm="12" md="4">
            <ul className="list-unstyled text-center">
              <li><Link href="privacy">Privacy Policy</Link></li>
              <li><a href="#" onClick={mailingToggle}>Mailing List</a></li>
              <li><a href="#" onClick={contactToggle}>Contact Us</a></li>
            </ul>
          </Col>
        </Row>
        <div className='thinRow'>
          <p className='powered'>Checkout our <a href='https://github.com/collaboracode'>GitHub</a></p>
          <p className='powered'>Powered by Collaboration</p>
        </div>
      </Container>
    </footer>
  )
}
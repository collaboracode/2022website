import React, { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { GoogleReCaptcha, useGoogleReCaptcha } from 'react-google-recaptcha-v3';
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
  // Navbar Items
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from "reactstrap"

import { NavbarHeight } from '../utils/Statics';

// import Background from './background';

export default function Layout(props) {
  const { children } = props;
  const { asPath } = useRouter();
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [captchaToken, setCaptchaToken] = useState("")

  const [navOpen, setNavOpen] = useState(false);

  //* I decided to keep it fixed and add margin at the top, and just translate it as needed
  // const [navFixed, setNavFixed] = useState(''); 

  const [scrollPos, setScrollPos] = useState(0);
  const [navClassName, setNavClassName] = useState('nav-scroll-in');
  const [snakeToggle, setSnakeToggle] = useState(false);

  const [mailingModal, setMailingModal] = useState(false);
  const [contactModal, setContactModal] = useState(false);

  const [email, setEmail] = useState('');
  const [emailbody, setEmailBody] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  // const [refreshReCaptcha, setRefreshReCaptcha] = useState(false);

  useEffect(() => {
    document.body.className = 'scrollBarOne'
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      if (position < scrollPos || position < NavbarHeight * 2) { // a little buffer before it will disappear
        setNavClassName('nav-scroll-in')
      } else if (position > scrollPos) {
        setNavOpen(false)
        setNavClassName('nav-scroll-out')
      }
      setScrollPos(position);
      if (Math.random() < .5) {
        setSnakeToggle(!snakeToggle)
        document.body.className = snakeToggle ? 'scrollBarOne' : 'scrollBarTwo'
      }

    }
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollPos]);

  const toggleNav = () => setNavOpen(!navOpen);
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
        setEmailBody(val);
        break;
    }
  }

  // Create an event handler so you can call the verification on button click event or form submit
  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      console.log('Execute recaptcha not yet available');
      return;
    }

    const token = await executeRecaptcha('')
    // Do whatever you want with the token
    setCaptchaToken(token)
    // console.log('token', token)
  }, [executeRecaptcha]);
  
  // You can use useEffect to trigger the verification as soon as the component being loaded
  useEffect(() => {
    handleReCaptchaVerify();
  }, [handleReCaptchaVerify, email, emailbody]); //! not sure if this is needed.
 
  const handleSubmit = (e) => {
    e.preventDefault()

    // setRefreshReCaptcha(true);

    if (email && emailbody && isEmail(email)) {
      setEmailSubmitted(true);
      console.log('Captcha Token: ' + captchaToken);
      if (captchaToken) { 
        fetch("https://rynwv8e0q9.execute-api.us-west-2.amazonaws.com/v1/contactform", {
          method: "POST",
          body: JSON.stringify({ "email": email, "emailbody": emailbody, "g-recaptcha-response": captchaToken }),
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

            // setRefreshReCaptcha(false);
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
      
    }
  }

  const testPath = (route) => {
    // regex can only be read when creating it, not after the fact ☜(ﾟヮﾟ☜)😁
    const rgx = new RegExp(
      `^\/${route}?(?![a-z])(?![0-9])`, // regex to check the begining of the path
      'i'
    )
    return rgx.test(asPath)
  }

  const isEmail = (email) => {
    // const emx = new RegExp(`^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$`, 'i');
    const emx = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm;
    return emx.test(email);
  }

  return (
    <>
      <Navbar expand='md' fixed={'top'}
        dark={true}
        className={`${navClassName}`}>
        <NavbarBrand href='/'>Collaboracode</NavbarBrand>
        <NavbarToggler onClick={toggleNav} />
        <Collapse isOpen={navOpen} navbar>
          <Nav className='m-auto' navbar>
            <NavItem>
              <NavLink
                className='text-center'
                href="/"
                active={testPath('/')}
              >
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className='text-center'
                href="/resources"
                active={testPath('resources')}
              >
                Resources
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className='text-center'
                href="/aboutus"
                active={testPath('aboutus')}
              >
                About Us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className='text-center'
                href="/gallery"
                active={testPath('gallery')}
              >
                Project Gallery
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

      {/* could make this an id selector */}
      <div className='main-content z-10'>{children}</div>
      {/* <Background/> */}
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
              
              {/* <GoogleReCaptcha
              refreshReCaptcha={ refreshReCaptcha }
                onVerify={token => {
                  setCaptchaToken(token);
              }}
            /> */}
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
                <li><Link href="https://www.meetup.com/collaboracode-sanantonio-tx/" passHref><a target="_blank">San Antonio, TX</a></Link></li>
                <li><Link href="https://www.meetup.com/collaboracode-danville-ca/" passHref><a target="_blank">Danville, CA</a></Link></li>
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
    </>
  )
}
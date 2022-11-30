import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
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

export default function Layout(props) {
  const { children } = props;
  const { asPath } = useRouter()

  const [navOpen, setNavOpen] = useState(false);

  //* I decided to keep it fixed and add margin at the top, and just translate it as needed
  // const [navFixed, setNavFixed] = useState(''); 

  const [scrollPos, setScrollPos] = useState(0);
  const [navClassName, setNavClassName] = useState('nav-scroll-in')
  const [snakeToggle, setSnakeToggle] = useState(false)

  const [mailingModal, setMailingModal] = useState(false);
  const [contactModal, setContactModal] = useState(false);

  const [email, setEmail] = useState('');
  const [emailbody, setEmailbody] = useState('');
  useEffect(() => {
    document.body.className = 'scollBarOne'
  }, [])
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
        document.body.className = snakeToggle ? 'scollBarOne' : 'scrollBarTwo'
      }

    }
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollPos]);

  // useEffect(() => {
  //   const position = window.pageYOffset;
  //   console.log(position, prevPos)
  //   setNavFixed(position > 60 && position > prevPos ? 'top' : '');
  // }, [prevPos]);

  const toggleNav = () => setNavOpen(!navOpen);
  const mailingToggle = () => setMailingModal(!mailingModal);
  const contactToggle = () => setContactModal(!contactModal);

  // const handleScroll = (e) => {
  //   const position = window.scrollY;

  //   if (currPos === 0) {
  //     setCurrPos(position);
  //   } else {
  //     setPrevPos(currPos);
  //     setCurrPos(position);
  //   }
  // }

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

  // const CustomNavbar = forwardRef((props, ref) => {
  //   const navbarRef = useRef(null);

  //   useImperativeHandle(ref, () => ({
  //     scrollTop: navbarRef.current.scrollTop
  //   }));

  //   return <Navbar color='dark' dark expand='md' fixed={ navFixed } onScroll={ handleScroll } ref={ navbarRef }>{ props.children }</Navbar>;
  // })

  return (
    <>
      {/* <nav>
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
          <NavItem>
            <NavLink
              href="/resources"
              active={testPath('resources')}
            >
              Resources
            </NavLink>
          </NavItem>
        </Nav>
      </nav> */}

      <Navbar expand='md' fixed={'top'}
        // color='dark' dark 
        className={`${navClassName}`}>
        <NavbarBrand href='/'>Collaboracode</NavbarBrand>
        <NavbarToggler onClick={toggleNav} />
        <Collapse isOpen={navOpen} navbar>
          <Nav className='m-auto' navbar>
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
                href="/gallery"
                active={testPath('gallery')}
              >
                Gallery
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

      {/* could make this an id selector */}
      <div className='main-content'>{children}</div>

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
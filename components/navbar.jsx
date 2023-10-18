import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { NavbarHeight } from '../utils/Statics';

import SessionNavSection from './sessionNavSection';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap"
export function SiteNav() {
  const [navClassName, setNavClassName] = useState('nav-scroll-in');
  const [navOpen, setNavOpen] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  const toggleNav = () => setNavOpen(!navOpen);
  
  const { asPath } = useRouter();
  
  const testPath = (route) => {
    // regex can only be read when creating it, not after the fact ☜(ﾟヮﾟ☜)😁
    const rgx = new RegExp(
      `^\/${route}?(?![a-z])(?![0-9])`, // regex to check the begining of the path
      'i'
    )
    return rgx.test(asPath)
  }
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
    }
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollPos]);
  return (
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
          <NavItem>
            <NavLink
              className='text-center'
              href="/blog"
              active={testPath('blog')}
            >
              Blog
            </NavLink>
          </NavItem>
        </Nav>
        {
          // todo get this from shifting over the rest of the nav
          testPath("blog") === true && <SessionNavSection />
        }
      </Collapse>
    </Navbar>
  )
}

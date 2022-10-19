import { useRouter } from 'next/router'

import { Nav, NavItem, NavLink } from "reactstrap"

export default function Layout({ children }) {
  const { asPath } = useRouter()
  return (
    <>
      <nav>
        <Nav
          card
          pills
          className="justify-content-center mt-1"
        >
          <NavItem
            className='logo'
          >
            <NavLink
              href="/"
            >
              Logo
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
            <NavLink href="/test"
              // regex to check just the begining of the path
              active={/^\/test?(?![a-z])(?![0-9])/i.test(asPath)}
            >
              Test
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              disabled
              href="#"
            >
              path {asPath}
            </NavLink>
          </NavItem>
        </Nav>
      </nav>
      <div>{children}</div>
      <footer className="cntr-footer">
        {/* <a
          href="https://vercel.com?filter=next.js&utm_source=github&utm_medium=example&utm_campaign=next-example"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="sml-logo" />
        </a> */}Powered by 
      </footer>
    </>
  )
}
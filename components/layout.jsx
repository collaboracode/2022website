// import React from "react"
import Link from "next/link"
import { Nav } from "reactstrap"

export default function Layout({ children }) {
  return (
    <>
      <Nav>
        <ul>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/test"}>Test</Link>
          </li>
        </ul>
      </Nav>
      <main>{children}</main>
      <footer className="cntr-footer">
        <a
          href="https://vercel.com?filter=next.js&utm_source=github&utm_medium=example&utm_campaign=next-example"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="sml-logo" />
        </a>
      </footer>
    </>
  )
}
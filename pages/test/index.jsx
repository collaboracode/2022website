import { Badge as Link } from "reactstrap"
export default function Test({ Component, pageProps }) {
  return (
    <>
      <h1>this is a test</h1>
      <div className="d-flex flex-column align-items-center">
        <Link
          className="link col-md-4"
          href="test/1"
        >
          valid
        </Link>
        <Link
          className="link col-md-4"
          href="1/test"
        >
          not valid
        </Link>
      </div>
    </>
  )
}
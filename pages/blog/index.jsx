import { Col, Row, Card, CardBody, CardSubtitle, CardText, CardTitle, CardFooter, Container } from "reactstrap"
import Background from "../../components/background"


export default function BlogIndex({ posts }) {
  return (
    <>
      <Background />
      {/* <div className='page-container'> */}
      <Container>
        <Row>
          <Col>
            <span className="">
              <h1 className="text-center mb-5 bg-about">Blog</h1>
            </span>
          </Col>
        </Row>
        <div className="bg-about">

        {posts.map((post) => (
          <Row key={post.id}><p>{post.author}</p></Row>
          ))}

        </div>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const origin = process.env.ORIGIN;
  const res = await fetch(`${process.env.ORIGIN}/api/posts`)
  const posts = await res.json()
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,

    },
  }
}
import Link from "next/link";
import { Col, Row, Container } from "reactstrap"
import Background from "../../components/background"
// import Login from "../../components/login";
import styles from "../../styles/blog.module.scss";


export default function BlogIndex({ posts }) {
  return (
    <>
      <Background />

      {/* // todo figure out if this is where we want this */}
      <Container className={styles.topMargin}>
        <Row>
          <Col>
            <span className="">
              <h1 className="text-center mb-5 bg-about">Blog</h1>
            </span>
          </Col>
        </Row>
        <div className="bg-about">

          {posts.map((post) => (
            <Row key={post.id} className="flex-column">
              <Link href={`/blog/${post.id}`}>{post.title}</Link> {/*//todo get our colors working on this to overide the bootstrap one */}
              <p>writen by {post.author}</p>
            </Row>
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
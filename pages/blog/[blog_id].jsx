import { Container, Row } from "reactstrap";
import Background from "../../components/background";

export default function Blog(props) {
  const { title, content, author } = props
  return (
    <>
      <Container>
        <Row>
          <h2>{title}</h2>
          <h3>Author: {author}</h3>
        </Row>
        <Row>
          <p>{content}</p>
        </Row>
      </Container>
    </>
  )
}

export async function getStaticProps(context) {
  const { params } = context
  const apiURL = `${process.env.ORIGIN}/api/posts/${params.blog_id}`
  const res = await fetch(apiURL);
  const blog = await res.json()
  return {
    props: {
      title: blog.title,
      content: blog.content,
      author: blog.author
    }, // will be passed to the page component as props
  }
}

export async function getStaticPaths() {
  const apiURL = `${process.env.ORIGIN}/api/posts`
  const res = await fetch(apiURL);
  const blogs = await res.json()
  const paths = blogs.map(blog => {
    return {
      params: {
        blog_id: `${blog.id}`
      }

    }
  })
  return {
    paths,
    fallback: false
  }
}
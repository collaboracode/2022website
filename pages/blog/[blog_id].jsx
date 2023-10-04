import { Container, Row } from "reactstrap";
import parse from "html-react-parser";
import Background from "../../components/background";
import styles from "../../styles/blog.module.scss";

export default function Blog(props) {
  // console.log("props: ", props)
  const { title, content, author, draft, channel } = props
  return (
    <>
      <Background/>
      <Container className={styles.topMargin}>
        <div className="bg-featured">
        <Row>
          <h2>{title}</h2>
        </Row>
        <Row>
          <h3>Author: {author}</h3>
        </Row>
        <Row>
          <h3>Channel: {channel}</h3>
        </Row>
        </div>
        <Row className="bg-about">
          {parse(content)}
          {/* {content} */}
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
  // console.log("blog: ", blog)
  return {
    props: {
      title: blog.title,
      content: blog.content,
      author: blog.author,
      draft: blog.draft,
      changed: blog.changed,
      channel: blog.channel,
      date: blog.date
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
import { Button, Container, Row } from "reactstrap";
import parse from "html-react-parser";
import Background from "../../components/background";
import styles from "../../styles/blog.module.scss";
import { getSession } from "next-auth/react";
import { getServerSideProps } from "./new";
import { useEffect, useState } from "react";

export default function Blog(props) {
  const { title, content, author, draft, channel, userCanEdit, id } = props
  const [session, setSession] = useState()
  useEffect(() => {
    getSession().then(data => setSession(data))
  },[])
  return (
    <>
      <Background />
      <Container className={styles.topMargin}>
        <div className="bg-featured">
          {session?.user.name === author && <Button color="warning" href={`/blog/edit/${id}`} className={styles.editButton}>Edit</Button>}
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
        <Row className={`bg-about ${styles.blogContent}`}>
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
      id: blog.id,
      title: blog.title,
      content: blog.content,
      author: blog.author,
      draft: blog.draft,
      changed: blog.changed,
      channel: blog.channel,
      date: blog.date,
    }, // will be passed to the page component as props
    revalidate: 1
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
    fallback: "blocking"
  }
}
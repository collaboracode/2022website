import { getSession } from 'next-auth/react';

import Background from '../../../components/background';
import BlogEditor from '../../../components/blogEditor';

export default function newBlog(props) {
  const { blog, TINY_KEY } = props

  return (
    <>
      <Background />
      <BlogEditor blog={blog} TINY_KEY={TINY_KEY}/>
    </>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false
      }
    }
  }
  const { params } = context
  const apiURL = `${process.env.ORIGIN}/api/posts/${params.post_id}`
  const res = await fetch(apiURL);
  const blog = await res.json()
  return {
    props: {
      session: session,
      TINY_KEY: process.env.ENV === "DEV" ? process.env.TINY_KEY : "no-api-key",
      blog: blog
    }
  }
}
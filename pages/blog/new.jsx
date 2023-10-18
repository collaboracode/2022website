import Background from '../../components/background';
import { getSession } from 'next-auth/react';
import BlogEditor from '../../components/blogEditor';
export default function newBlog(props) {
  return (
    <>
      <Background />
      <BlogEditor TINY_KEY={props.TINY_KEY} username={props.username}/>
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
  return {
    props: { session, username: session.user.name, TINY_KEY: process.env.ENV === "DEV" ? process.env.TINY_KEY : "no-api-key" }
  }
}
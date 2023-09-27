import React, { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

import { Container, Input, Label } from "reactstrap"
import Background from '../../../components/background';
// import { redirect } from 'next/dist/server/api-utils';
import { getSession } from 'next-auth/react';
export default function newBlog(props) {
console.log('log props', props)
  const editorRef = useRef(null);
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("string")
  getSession().then((s) => {
    // console.log('s: ',s.user.name)
    setAuthor(s.user.name)
  })
  const save = async (isDraft) => {
    if (editorRef.current /*// todo add user check here */) {
      // console.log(editorRef.current.getContent())
      await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify(
          {
            id: Date.now(),
            // todo send username with it maybe here
            author: author, // maybe make this username, or name from the account
            title: title,
            channel: "main", //? maybe use select
            date: Date.now(),
            content: editorRef.current.getContent(),
            draft: isDraft,
            changed: Date.now()
          }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      // todo add something to let the user know it worked, and clear the fields
    }
  }

  const post = () => {
    save(false)
  }

  const draft = () => {
    save(true)
  }

  const handleChange = (e) => {
    setTitle(e.target.value)
  }

  return (
    <>

      <Background />
      <script src={`https://cdn.tiny.cloud/1/${process.env.TINY_KEY}/tinymce/5/tinymce.min.js`} referrerPolicy="origin"></script>
      <Container className='bg-about'>
        <Label>
          Title
          <Input type='text' value={title} onChange={handleChange} />
        </Label>
        {/* // todo get this to come from the draft */}
        <h4>Author: {author}</h4>
        <Editor
          apiKey={process.env.TINY_KEY}
          onInit={(evt, editor) => editorRef.current = editor}
          initialValue={""}
          init={{
            height: 500,
            menubar: false,
            plugins: [
              'advlist autolink lists link image charmap print preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table paste code help wordcount'
            ],
            toolbar: 'undo redo | formatselect | ' +
              'bold italic backcolor | alignleft aligncenter ' +
              'alignright alignjustify | bullist numlist outdent indent | ' +
              'removeformat | help',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
          }}
        />
        <button onClick={post}>Post</button>
        <button onClick={draft}>Save</button>
      </Container>
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
    props: { session }
  }
  // todo get props to pass down
  // const { params } = context
  // const apiURL = `${process.env.ORIGIN}/api/posts/${params.blog_id}`
  // const res = await fetch(apiURL);
  // const blog = await res.json()
  // return {
  //   props: {
  //     title: blog.title,
  //     content: blog.content,
  //     author: blog.author,
  //     draft: blog.draft,
  //     changed: blog.changed,
  //     channel: blog.channel,
  //     date: blog.date,
  //     session: session
  //   }, // will be passed to the page component as props
  // }
}
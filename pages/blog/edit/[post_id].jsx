import React, { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

import { Button, Container, Input, Label } from "reactstrap"
import Background from '../../../components/background';
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
export default function newBlog(props) {
  const editorRef = useRef(null);
  const router = useRouter()

  const { blog, TINY_KEY } = props
  const [title, setTitle] = useState(blog.title)

  const save = async (isDraft) => {
    if (editorRef.current /*// todo add user check here */) {
      fetch(`/api/posts/${blog.id}`, {
        method: 'PUT',
        body: JSON.stringify(
          {
            id: Date.now(),
            author: blog.author,
            title: title,
            channel: blog.channel, //? maybe use select
            date: blog.date,
            content: editorRef.current.getContent(),
            draft: isDraft,
            changed: Date.now()
          }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(data => {
          if (data.status === 200 && !isDraft) {
            router.push(`/blog/${blog.id}`)
          }
        })
    }
  }
  const deleteBlog = () => {
    if (editorRef.current /*// todo add user check here */) {
      fetch(`/api/posts/${blog.id}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(data => {
          if (data.status === 204) {
            router.push(`/blog`)
          }
          else {
            // todo add custom alert
            alert(`something went wrong status: ${data.status}`)
          }
        })
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
      <script src={`https://cdn.tiny.cloud/1/${TINY_KEY}/tinymce/5/tinymce.min.js`} referrerPolicy="origin"></script>
      <Container className='bg-about'>
        <Label>
          Title
          <Input type='text' value={title} onChange={handleChange} />
        </Label>
        {/* // todo get this to come from the draft */}
        <h4>Author: {blog.author}</h4>
        <Editor
          id='tinyEditor'
          apiKey={TINY_KEY}
          onInit={(evt, editor) => editorRef.current = editor}
          initialValue={blog.content}
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
        <div className='mt-1'>
          <Button onClick={post} color='success' className='mr-3'>{blog.draft ? "Post" : "Save Post"}</Button>
          {blog.draft && <Button onClick={draft} color='success' className='mr-3'>Save</Button>}
          <Button onClick={deleteBlog} color='danger'>Delete</Button>
        </div>
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
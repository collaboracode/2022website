import React, { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

import { Button, Container, Input, Label } from "reactstrap"
import Background from '../../components/background';
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
export default function newBlog(props) {
  const router = useRouter()
  const editorRef = useRef(null);
  const [title, setTitle] = useState("")
  const save = async (isDraft) => {
    if (editorRef.current /*// todo add user check here */) {
      const setID = Date.now()
      fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify(
          {
            id: setID, // todo maybe have backend make the id to prevent collisions (unlikely, but possible)
            author: props.author, //maybe make this username, or name from the account
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
      }).then(data => {
        if (data.status !== 201) {
          // todo make custom error message popup at top of window
          alert("something went wrong")
        }
        else {
          // todo refactor this to be able to use data returned from the api so that backend can handle id
          router.push(`/blog${isDraft ? "/edit" : ""}/${setID}`)
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
      <script src={`https://cdn.tiny.cloud/1/${props.TINY_KEY}/tinymce/5/tinymce.min.js`} referrerPolicy="origin"></script>
      <Container className='bg-about'>
        <Label>
          Title
          <Input type='text' value={title} onChange={handleChange} />
        </Label>
        <Editor
          id='tinyMCE'
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
          <div className='mt-1'>
            <Button onClick={post} color='success' className='mr-3'>Post</Button>
            <Button onClick={draft} color='success'>Save</Button>
          </div>
        {/* //todo add clear option */}
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
    props: { session, author: session.user.name, TINY_KEY: process.env.ENV === "DEV" ? process.env.TINY_KEY : "no-api-key" }
  }
}
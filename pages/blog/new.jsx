import React, { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

import { Container, Input, Label } from "reactstrap"
import Background from '../../components/background';
// import { redirect } from 'next/dist/server/api-utils';
import { getSession } from 'next-auth/react';
export default function newBlog() {

  const editorRef = useRef(null);
  const [title, setTitle] = useState("")

  const save = async (isDraft) => {
    if (editorRef.current /*// todo add user check here */) {
      // console.log(editorRef.current.getContent())
      await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify(
          {
            id: Date.now(),
            // todo send username with it maybe here
            author: "testName", // maybe make this username, or name from the account
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
    save(true)
  }

  const draft = () => {
    save(false)
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
}
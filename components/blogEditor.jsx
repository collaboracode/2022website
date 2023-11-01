
import { Editor } from '@tinymce/tinymce-react';
import React, { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { Button, Container, Input, Label } from "reactstrap"

export default function BlogEditor({ blog, TINY_KEY, username }) {
  const router = useRouter()
  const editorRef = useRef(null);
  const [title, setTitle] = useState(blog?.title ? blog.title : "")
  const timeNow = Date.now()
  const setID = blog?.id ? blog.id : timeNow
  const post = () => {
    save(false)
  }

  const draft = () => {
    save(true)
  }
  const handleChange = (e) => {
    setTitle(e.target.value)
  }
  ``
  const save = async (isDraft) => {
    if (editorRef.current /*// todo add user check here */) {
      fetch(`/api/posts${blog ? `/${setID}` : ""}`, {
        method: blog ? 'PUT' : 'POST',
        body: JSON.stringify(
          {
            id: setID,
            author: blog?.author ? blog.author : username,
            title: title,
            channel: blog?.channel ? blog.channel : "main", //? maybe add select
            date: blog?.date ? blog.date : setID,
            content: editorRef.current.getContent(),
            draft: isDraft,
            changed: timeNow
          }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(data => {
          if (data.status === 200 && !isDraft) {
            router.push(`/blog/${setID}`)
          }
        })
    }
  }

  const deleteBlog = () => {
    if (editorRef.current /*// todo add user check here */) {
      fetch(`/api/posts/${setID}`, {
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

  return (
    <>
      <script src={`https://cdn.tiny.cloud/1/${TINY_KEY}/tinymce/5/tinymce.min.js`} referrerPolicy="origin"></script>
      <Container className='bg-about'>
        <Label>
          Title
          <Input type='text' value={title} onChange={handleChange} />
        </Label>
        {/* // todo get this to come from the draft */}
        <h4>Author: {blog?.author ? blog.author : username}</h4>
        <Editor
          id='tinyEditor'
          apiKey={TINY_KEY}
          onInit={(evt, editor) => editorRef.current = editor}
          initialValue={blog?.content ? blog.content : ""}
          init={{
            height: 500,
            menubar: true,
            plugins: [
              'advlist autolink lists link image charmap print preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table paste code help wordcount'
            ],
            toolbar: 'undo redo | formatselect | ' +
              'bold italic backcolor | alignleft aligncenter ' +
              'alignright alignjustify | bullist numlist outdent indent | hr' +
              'removeformat | help',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
          }}
        />
        <div className='mt-1'>
          <Button onClick={post} color='success' className='mr-3'>{(blog?.draft || !blog) ? "Post" : "Save Post"}</Button>
          {/* //todo add make private option */}
          {(blog?.draft || !blog) && <Button onClick={draft} color='success' className='mr-3'>{!blog ? "Save as draft" : "Save"}</Button>}
          {/* //todo add confirmation for deletion */}
          {blog && <Button onClick={deleteBlog} color='danger'>Delete</Button>}
        </div>
      </Container>
    </>
  )
}
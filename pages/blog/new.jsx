import React, { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

import { Form, FormGroup, Input, Label } from "reactstrap"
export default function newBlog() {
  const editorRef = useRef(null);
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("<p>This is the initial content of the editor.</p>")
  const log = async (e) => {
    if (editorRef.current) {
      // console.log(editorRef.current.getContent());
      e.preventDefault()
      setContent(editorRef.current.getContent())
      await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify(
          {
            id: "80",
            author: "testName",
            title: "title",
            channel: "main",
            date: Date.now(),
            content: "test"
          }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
    }
  };
  const handleChange = (e) => {
    setTitle(e.target.value)
  }
  return (

    <>
      <Label>
        Title
        <Input type='text' value={title} onChange={handleChange} />
      </Label>
      <Editor
        apiKey={process.env.TINY_KEY}
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue={content}
        init={{
          height: 500,
          menubar: false,
          // plugins: [
          //   'advlist autolink lists link image charmap print preview anchor',
          //   'searchreplace visualblocks code fullscreen',
          //   'insertdatetime media table paste code help wordcount'
          // ],
          toolbar: 'undo redo | formatselect | ' +
            'bold italic backcolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
      <button onClick={log}>Log editor content</button>
    </>
  )
}
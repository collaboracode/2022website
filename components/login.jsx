import { useState } from "react"
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader } from "reactstrap"

// todo integrate backend
export default function Login(props) {
  const { open, setOpen } = props

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleChange = (e) => {
    switch (e.target.name) {
      case "email":
        setEmail(e.target.value)
        break
      case "password":
        setPassword(e.target.value)
        break
      default:
        break
    }
  }

  const handleSubmit = () => {
    console.log("submited", email, password)
    setEmail("")
    setPassword("")
    setOpen(false)
  }

  const toggle = () => {
    setOpen(!open)
  }
  return (
    <Modal
      toggle={toggle}
      isOpen={open}
      {...props}
    >
      <ModalHeader toggle={toggle}>
        <h1>Login</h1>
      </ModalHeader>
      <ModalBody>
        <Form
          method="dialog"
          onSubmit={handleSubmit}
          className=""
        >
          <FormGroup>

            <Label for="email">
              Email:
            </Label>
            <Input type="email" id="email" name="email" value={email} onChange={handleChange} />
            <Label for="password">
              Password:
            </Label>
            <Input type="password" id="password" name="password" value={password} onChange={handleChange} />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </ModalBody>
    </Modal>
  )
}
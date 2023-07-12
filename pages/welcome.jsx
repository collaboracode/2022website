import { Button, Col, Container, Row, Form, FormGroup, Label, Input, FormText, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import { useState } from 'react';

import Background from "../components/background"

export default function Welcome() {
  const [attributes, setAttributes] = useState({
    name: '',
    discord: '',
    email: '',
    html: '',
    javascript: '',
    react: '',
    other: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitModal, setSubmitModal] = useState(false);



  const handleChange = (e) => {
    const attributeKey = e.target.name;
    const value = e.target.value;

    const attributesClone = { ...attributes };
    attributesClone[attributeKey] = value;

    setAttributes(attributesClone);
  }
  const handleReset = (e) => {
    setAttributes({
      name: '',
      discord: '',
      email: '',
      html: '',
      javascript: '',
      react: '',
      other: ''
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    
    const res = await fetch('/api/welcome', {
      method: 'POST',
      body: JSON.stringify(attributes),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })

    setSubmitModal(true);

    console.log(await res.json())
  };

  const closeAndReset = () => {
    // Toggle the modal off and clear the form fields
    setSubmitting(false);
    setSubmitModal(false);
    setAttributes({
      name: '',
      discord: '',
      email: '',
      html: '',
      javascript: '',
      react: '',
      other: ''
    });
  };

  return (
    <>
      <Background />
      <Container>
        <Row className='bg-featured'>
          <h1>Welcome to Collaboracode!</h1>
          <p>Our group would like to get to know a little bit about you so we can help you on your learning journey. Please fill out the form below and to align us for pairing you with projects, peers, and support based on your skill level. Feel free to skip any fields or questions you aren't comfortable with sharing.</p>
        </Row>
        <Row className='bg-about'>
          <Col xs={{ size: 12 }} md={{ size: 8, offset: 1 }} lg={{ size: 6, offset: 2 }}>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input type="text" name="name" id="welcome-name" value={attributes.name} onChange={handleChange} placeholder="Enter your name" />
              </FormGroup>
              <FormGroup>
                <Label for="email">Discord Name</Label>
                <Input type="text" name="discord" id="welcome-discord" value={attributes.discord} onChange={handleChange} placeholder="Enter your discord tag" />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input type="email" name="email" id="welcome-email" value={attributes.email} onChange={handleChange} placeholder="Enter your email" />
              </FormGroup>
              <FormGroup>
                <Label for="html">HTML/CSS Experience Level</Label>
                <Input type="select" name='html' id='welcome-html' onChange={handleChange} value={attributes.html}>
                  <option value={"Brand new"}>What is HTML?</option>
                  <option value={"less than 6 months"}>Less than 6 months</option>
                  <option value={"less than 9 months"}>Less than 9 months</option>
                  <option value={"less than 12 months"}>Less than 12 months</option>
                  <option value={"greater than 12 months"}>&gt;= 12 months</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="javascript">Javascript Experience Level</Label>
                <Input type="select" name="javascript" id="welcome-javascript" onChange={handleChange} value={attributes.javascript}>
                  <option value={"Brand new"}>Is that the writing in my cappuccino?</option>
                  <option value={"less than 6 months"}>Less than 6 months</option>
                  <option value={"less than 9 months"}>Less than 9 months</option>
                  <option value={"less than 12 months"}>Less than 12 months</option>
                  <option value={"greater than 12 months"}>&gt;= than 12 months</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="react">React Experience Level</Label>
                <Input type="select" name="react" id="welcome-react" onChange={handleChange} value={attributes.react}>
                  <option value={"Brand new"}>What is React? || That youtube thing?</option>
                  <option value={"less than 6 months"}>Less than 6 months</option>
                  <option value={"less than 9 months"}>Less than 9 months</option>
                  <option value={"less than 12 months"}>Less than 12 months</option>
                  <option value={"greater than 12 months"}>&gt;= 12 months</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="other">Any other relevant experience programming</Label>
                <Input type="textarea" name="other" id="welcome-other" value={attributes.other} onChange={handleChange} placeholder="Any other relevant experience programming" />
              </FormGroup>
              <FormGroup>
                <Button disabled={submitting} className="btn btn-primary" type="submit">Submit</Button>
                <Button className="btn btn-primary" onClick={handleReset}>Reset</Button>
              </FormGroup>
              <Modal isOpen={submitModal} size='lg'>
                <ModalHeader >Welcome Submission</ModalHeader>
                <ModalBody>Thank you for your submission to CollaboraCode. Your information has been passed to the moderators in Discord.
                </ModalBody>
                <ModalFooter><Button onClick={closeAndReset}>Close</Button></ModalFooter>
              </Modal>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )



}
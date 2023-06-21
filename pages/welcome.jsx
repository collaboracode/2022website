import { Button, Col, Container, Row, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { useState } from 'react';

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

  const handleChange = (e) => {
    const attributeKey = e.target.name;
    const value = e.target.value;

    const attributesClone = { ...attributes };
    attributesClone[attributeKey] = value;

    setAttributes(attributesClone);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/welcome', {
      method: 'POST',
      body: JSON.stringify(attributes),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    console.log(await res.json())
  };
  return (
    <>
      <h1>Welcome to Collaboracode.</h1>
      <p>We'd like to know a little bit about you so we can help you on your learning journey. Please fill out the form below and it will help is pair you with projects, peers and provide support based on your skill level. Feel free to skip any fields or questions you aren't comfortable with sharing.</p>
      <Container>
        <Row>
          <Col xs={{ size: 12 }} md={{ size: 8, offset: 1 }} lg={{ size: 6, offset: 2 }}>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input type="text" name="name" id="welcome-name" onChange={ handleChange } placeholder="Enter your name" />
              </FormGroup>
              <FormGroup>
                <Label for="email">Discord Name</Label>
                <Input type="text" name="discord" id="welcome-discord" onChange={ handleChange } placeholder="Enter your discord name" />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input type="email" name="email" id="welcome-email" onChange={ handleChange } placeholder="Enter your email" />
              </FormGroup>
              <FormGroup>
                <Label for="html">HTML/CSS Experience Level</Label>
                <Input type="select" name='html' id='welcome-html' onChange={ handleChange }>
                  <option value={"Brand new"}>What is HTML?</option>
                  <option value={"less than 6 months"}>Less than 6 months</option>
                  <option value={"less than 9 months"}>Less than 9 months</option>
                  <option value={"less than 12 months"}>Less than 12 months</option>
                  <option value={"greater than 12 months"}>&gt;= 12 months</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="javascript">Javascript Experience Level</Label>
                <Input type="select" name="javascript" id="welcome-javascript" onChange={ handleChange }>
                  <option value={"Brand new"}>Is that the writing in my cappuccino?</option>
                  <option value={"less than 6 months"}>Less than 6 months</option>
                  <option value={"less than 9 months"}>Less than 9 months</option>
                  <option value={"less than 12 months"}>Less than 12 months</option>
                  <option value={"greater than 12 months"}>&gt;= than 12 months</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="react">React Experience Level</Label>
                <Input type="select" name="react" id="welcome-react" onChange={ handleChange }>
                  <option value={"Brand new"}>What is React? || That youtube thing?</option>
                  <option value={"less than 6 months"}>Less than 6 months</option>
                  <option value={"less than 9 months"}>Less than 9 months</option>
                  <option value={"less than 12 months"}>Less than 12 months</option>
                  <option value={"greater than 12 months"}>&gt;= 12 months</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="other">Any other relevant experience programming</Label>
                <Input type="textarea" name="other" id="welcome-other" onChange={ handleChange } placeholder="Any other relevant experience programming" />

              </FormGroup>
              <FormGroup>
                <Button className="btn btn-primary" type="submit">Submit</Button>
              </FormGroup>

            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )



}
import { Button, Col, Container, Row, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default function Welcome() {
  return (
    <>
      <h1>Welcome to Collaboracode.</h1>
      <p>We'd like to know a little bit about you so we can help you on your learning journey. Please fill out the form below and it will help is pair you with projects, peers and provide support based on your skill level. Feel free to skip any fields or questions you aren't comfortable with sharing.</p>
      <Container>
        <Row>
          <Col xs={{ size: 12 }} md={{ size: 8, offset: 1 }} lg={{ size: 6, offset: 2 }}>
            <Form>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input type="text" name="name" id="welcome-name" placeholder="Enter your name" />
              </FormGroup>
              <FormGroup>
                <Label for="email">Discord Name</Label>
                <Input type="email" name="discord" id="welcome-discord" placeholder="Enter your discord name" />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input type="email" name="email" id="welcome-email" placeholder="Enter your email" />
              </FormGroup>
              <FormGroup>
                <Label for="html">HTML/CSS Experience Level</Label>
                <Input type="select">
                  <option value={0}>What is HTML?</option>
                  <option value={1}>Less than 6 months</option>
                  <option value={2}>Less than 9 months</option>
                  <option value={3}>Less than 12 months</option>
                  <option value={4}>&gt;= 12 months</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="javascript">Javascript Experience Level</Label>
                <Input type="select" name="javascript" id="welcome-javascript" >
                  <option value={0}>Is that the writing in my cappuccino?</option>
                  <option value={1}>Less than 6 months</option>
                  <option value={2}>Less than 9 months</option>
                  <option value={3}>Less than 12 months</option>
                  <option value={4}>&gt;= than 12 months</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="react">React Experience Level</Label>
                <Input type="select" name="react" id="welcome-react">
                  <option value={0}>What is React? || That youtube thing?</option>
                  <option value={1}>Less than 6 months</option>
                  <option value={2}>Less than 9 months</option>
                  <option value={3}>Less than 12 months</option>
                  <option value={4}>&gt;= 12 months</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="other">Any other relevant experience programming</Label>
                <Input type="textarea" name="other" id="welcome-other" placeholder="Any other relevant experience programming" />

              </FormGroup>

            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )



}
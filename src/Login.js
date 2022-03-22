import React from 'react';
import { Form, Col, Row, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Login() {
    return(

        <Form>
  <Form.Group as={Row} className="mb-3" controlId="formHorizontalId">
    <Form.Label column sm={2}>
      ID
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="ID" placeholder="ID" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
    <Form.Label column sm={2}>
      Password
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="password" placeholder="Password" />
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
    <Col sm={{ span: 10, offset: 2 }}>
      <Form.Check label="Remember me" />
    </Col>
  </Form.Group>
  <p className={"float-left"}><a href={"/signin"}>Sign in</a></p>    

  <Form.Group as={Row} className="mb-3">
    <Col sm={{ span: 10, offset: 2 }}>
      <Button type="submit">Sign in</Button>
    </Col>
  </Form.Group>
</Form>

    )
}

export default Login;
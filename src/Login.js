import { Form, Col, Row, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom';

import styles from "./Login.module.css";




function Login() {
  return (
    <>
      <div class="container">
      <div className={styles.text}>Login</div>
      </div>
    
    
    <div className="Form">
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
        <Col sm={{ span: 10, offset: 2 }} form style={{ display: 'flex', flexDirection: 'column' }}>
          <Form.Check label="Remember me" />
          <a href={"/Join"}>Created an Account</a>
        </Col>
      </Form.Group>


      <div className="auth_social_buttons" form style={{ display: 'flex', flexDirection: 'column' }}>
        
          <a href="/oauth2/authorization/google" class="btn btn-success active" role="button" >Google Login</a>
        
      </div>

      <div className={styles.loginbutton}>
        <Button type="Login" href={'/MainPage'}>Login</Button>
      </div>

    </div></>



    );
  }
  
      
  export default Login;
    
  




  
   /* <><div className={styles.loginas}>
    <h1>Logged in as:</h1>
  </div>
  <div className="auth_social_buttons" form style={{display: 'flex', flexDirection: 'column'}}>

      <button className={styles.auth_google_button}>
        <a href="/oauth2/authorization/google">
          <div className={styles.auth_naver_button_image}>
          <img src={google} alt="google" />
          </div>
        </a>
      </button>

      <button className={styles.auth_naver_button}>
        <a href="/oauth2/authorization/naver">
          <div className={styles.auth_naver_button_image}>
            <img src={naver} alt="naver" />
          </div>
        </a>
      </button>


</div></>*/
      
        


/*} 민정님
      <div class="col-md-12">
          <div class="row">
              <div class="col-md-6">
      
                 Logged in as: <span id="user"></span>
                 
                  <a href="/logout" class="btn btn-info active" role="button">Logout</a>
                  
                  
                  <a href="/oauth2/authorization/google" class="btn btn-success active" role="button">Google Login</a>
                  <a href="/oauth2/authorization/naver" class="btn btn-secondary active" role="button">Naver Login</a>
                  
              </div>
          </div>
      </div>
    */ 
    

  

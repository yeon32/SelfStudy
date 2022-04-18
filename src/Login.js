import { Form, Col, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Button, Input, Label } from 'reactstrap';
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import LoginGoogle from 'react-google-login';

import styles from "./Login.module.css";


const Login = ({ history }) => {

  return (
      <div className="form-main">
      <Form className="form-signin">
          <h3 className="form-signin-heading">Login</h3>
          <Label for="inputEmail" className="sr-only">Email address</Label>
          <Input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
          <Label for="inputPassword" className="sr-only">Password</Label>
          <Input type="password" id="inputPassword" className="form-control"  placeholder="Password" required />

          <LoginGoogle />

          <Button className="styles.btn btn-lg btn-block" color="primary" type="button" onClick={() => { history.push('/MainPage') }}> Sign in</Button>
      </Form>
      
      </div>
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
    

  

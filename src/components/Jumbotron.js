import React from 'react';
//import './App.css';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";



function Jumbotron() {
  return (
    <div class="bg-light p-5 rounded-lg m-3">	
        <h1 class="display-4">공부는 셀프입니다</h1>	
        <p class="lead">서비스 소개</p>	
        <hr class="my-4" />	
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>	
        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>	
      </div>	
  );
}

export default Jumbotron;
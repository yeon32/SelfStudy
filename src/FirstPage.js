import React from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./App.css";
import Login from "./Login.js";
import logo from "./images/logo.png";
import firstpage_logo from "./images/firstpage_logo.gif";



function FirstPage() {
    return (
      <div className="FirstPage">
         <header>
      <Navbar bg="light" variant="light">
           <Container>
             <img
                src={logo}
                width="20"
                height="20"
                />
             <Navbar.Brand>공부는 셀프입니다</Navbar.Brand>
             <Nav className="me-auto">
               <Nav.Link href="/ServiceIntroduction">서비스소개</Nav.Link>
               <Nav.Link href="/Ranking">랭킹</Nav.Link>
               <Nav.Link href="/MakeProblem">문제만들기</Nav.Link>
               </Nav>
               </Container>
               </Navbar>
               </header>  
                

               <div className="LoginImageContainer">
                 <Login/>
               </div>
               
              
               <div className="FirstPageImageContainer">
               <img
                  src={firstpage_logo}            
                  />
                  </div>
                  </div>
          
     );

  }
    

  export default FirstPage;
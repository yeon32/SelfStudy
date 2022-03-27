import React from 'react';
import { Navbar, Nav, Container, Badge} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from "./images/logo.png";
import firstpage_logo from "./images/firstpage_logo.gif";

import Login from "./Login.js";
import styles from './FirstPage.module.css';
import Footer from "./Footer.js";



function FirstPage() {
    return (
      <div className="FirstPage">
         <header>
      <Navbar bg="light" variant="light">
           <Container>
              <img src={logo} alt="로고" className={styles.logo}/>
             
             <Navbar.Brand>공부는 셀프입니다</Navbar.Brand>
             <Nav className="me-auto">
               <Nav.Link href="/Introduction">서비스소개</Nav.Link>
               <Nav.Link href="/Ranking">랭킹</Nav.Link>
               <Nav.Link href="/MakeProblem"><Badge bg="info">문제만들기</Badge></Nav.Link>
               </Nav>
               </Container>
               </Navbar>
               </header>  
                

               <div>
                {/*로그인 자리*/}
               </div>
               
              
               <div className={styles.firstpage_logo}>
               <img
                  src={firstpage_logo}            
                  />
                  
                  </div>
                  <Footer/>
                  </div>

               
          
     );

  }
    

  export default FirstPage;
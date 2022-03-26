import React from 'react';
import { Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./images/logo.png";
import styles from './MainPage.module.css';

function Header() {
    return (
        <div>
       <Navbar bg="light" expand="lg">
              <Container>
              <img src={logo} alt="로고" className={styles.logo}/>
                  <Navbar.Brand>공부는 셀프입니다</Navbar.Brand>
                   <Navbar.Toggle aria-controls="basic-navbar-nav" />
                   <Navbar.Collapse id="basic-navbar-nav">
                       <Nav className="me-auto">
                           <Nav.Link href="/Ranking">랭킹</Nav.Link>
                           <NavDropdown title="마이페이지" id="basic-nav-dropdown">
                               <NavDropdown.Item href="/action/3.1">회원정보 수정</NavDropdown.Item>
                               <NavDropdown.Item href="/action/3.2">My 오답노트</NavDropdown.Item>   
                               <NavDropdown.Item href="/action/3.3">My 스크랩</NavDropdown.Item>
                               </NavDropdown>
                               <Nav.Link href="/MakeProblem">문제만들기</Nav.Link>
                               </Nav>
                               </Navbar.Collapse>
                               </Container>
                               </Navbar>
                               </div>
   

    );
}


export default Header;
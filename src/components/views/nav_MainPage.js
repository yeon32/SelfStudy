import React from 'react';
//import './App.css';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";


function Navigation() {
  return (
    <div className="Navigation">
         <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#home">공부는 셀프입니다</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#ranking">랭킹</Nav.Link>
      <NavDropdown title="마이페이지" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">회원정보수정</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">My 오답노트</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">My 스크랩</NavDropdown.Item>
      </NavDropdown>     
      <Nav.Link href="#problems">문제만들기</Nav.Link>  
    </Nav>  
    <Nav>
      <Nav.Link href="#login">로그인</Nav.Link>	
      <Nav.Link eventKey={2} href="#join">회원가입</Nav.Link>   
    </Nav>
    </Container>
  </Navbar>
    </div>
  );
}

export default Navigation;

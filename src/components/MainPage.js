import React from 'react';
import logo from "./images/logo.png";


function MainPage() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
            <img
              src={logo}
              width="20"
              height="20"
              />
                <Navbar.Brand href="#home">공부는 셀프입니다</Navbar.Brand>
                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
                 <Navbar.Collapse id="basic-navbar-nav">
                     <Nav className="me-auto">
                         <Nav.Link href="#ranking">랭킹</Nav.Link>
                         <NavDropdown title="마이페이지" id="basic-nav-dropdown">
                             <NavDropdown.Item href="#action/3.1">회원정보 수정</NavDropdown.Item>
                             <NavDropdown.Item href="#action/3.2">My 오답노트</NavDropdown.Item>
                             <NavDropdown.Item href="#action/3.3">My 스크랩</NavDropdown.Item>
                             <NavDropdown.Divider />
                             </NavDropdown>
                             <Nav.Link href="#problem">문제만들기</Nav.Link>
                             </Nav>
                             </Navbar.Collapse>
                             </Container>
                             </Navbar>
     
     );

  }
      
  export default MainPage;
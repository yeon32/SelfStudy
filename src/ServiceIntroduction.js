import React from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from "./images/logo.png";
import Introduction_logo from "./images/Introduction_logo.jpg";



function ServiceIntroduction() {
    return (
      <div className="Introduction">
        <header>
      <Navbar bg="light" variant="light">
          <Container>
            <img
                src={logo}
                width="20"
                height="20"
                />
          <Navbar.Brand href="#home">공부는 셀프입니다</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#service">서비스소개</Nav.Link>
              <Nav.Link href="#ranking">랭킹</Nav.Link>
              <Nav.Link href="#problem">문제만들기</Nav.Link>
              </Nav>
              </Container>
              </Navbar>
              </header>



              <div className="IntroductionImageContainer">
              <img
                  src={Introduction_logo}
                  />
                  </div>
                  <h2>나만의 문제를 만들어</h2>
                  <h3>나만의 공부를 시작해보자</h3>

                  <img
                src={logo}
                width="20"
                height="20"
                />
                  </div>

    );

  }


  export default ServiceIntroduction;
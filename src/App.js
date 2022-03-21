import React from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';	
import { BrowserRouter, Route } from 'react-router-dom';
//import { render } from '@testing-library/react';

import FirstPage from './components/FirstPage';
import MainPage from './components/MainPage';

function App() {
    return (
    <div className="App">
      {/* NavBar-FirstPage*/}
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">공부는 셀프입니다</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#service">서비스소개</Nav.Link>
            <Nav.Link href="#ranking">랭킹</Nav.Link>
            <Nav.Link href="#problem">문제만들기</Nav.Link>
            </Nav>
            </Container>
            </Navbar>

       <BrowserRouter> 
       <Route exact path="/">
         //첫페이지
       </Route>
       <Route path="/MainPage">
         //메인페이지
        </Route>
       </BrowserRouter>
      </div>

      );
     }
 
  

export default App;

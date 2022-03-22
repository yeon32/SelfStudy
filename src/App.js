import React from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';	
import { BrowserRouter, Route, Link } from 'react-router-dom';
import styles from "./App.css";
import Login from "./Login.js";
import logo from "./images/logo.png";
import firstpage_logo from "./images/firstpage_logo.gif";

//import FirstPage from './FirstPage.js';
//import MainPage from './MainPage.js';


function App() {
    return (
    <div className="App">
    {/* NavBar-FirstPage*/}
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

             <div className="LoginImageContainer">
               <Login></Login>
             </div>
             
            
             <div className="FirstPageImageContainer">
             <img
                src={firstpage_logo}            
                />
        </div>

        {/*}
        <div>
      <Route path="/" component={FirstPage} />
      <Route path="/MainPage" component={MainPage} />
    </div>*/}
            
     </div>
    
      );
     }
 
  

export default App;

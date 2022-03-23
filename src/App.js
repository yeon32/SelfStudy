import React from 'react';
//import { Navbar, Nav, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';	
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';


import FirstPage from './FirstPage.js';
import MainPage from './MainPage.js';


function App() {
    return (
    <div className="App">
      <FirstPage/>
      <MainPage/>
      
  {/*}   <BrowserRouter>
      <Route path='/' component={FirstPage} />
      <Route exact path='/MainPage' component={MainPage} />
      </BrowserRouter>
    */}   
      
        </div>
      );
     }
 
  

export default App;

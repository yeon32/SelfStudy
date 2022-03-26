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
     {/*} <MainPage/> */}

     <Routes>
       <Route path="/" element={<FirstPage />}/>
       <Route patu="/MainPage" element={<MainPage />}/>
     </Routes>
      
  
      
        </div>
      );
     }
 
  

export default App;

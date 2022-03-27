import React from 'react';
//import { Navbar, Nav, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';	
import { BrowserRouter, Routes, Route, Link, Switch } from 'react-router-dom';


import FirstPage from './FirstPage.js';
import MainPage from './MainPage.js';
import MakeProblem from './MakeProblem.js';


function App() {
    return (
    <div className="App">
     <Routes>
       <Route path="/" element={<FirstPage />}/>
       <Route path="/MainPage" element={<MainPage />}/>
       <Route path="/MakeProblem" element={<MakeProblem />}/>
     </Routes>
      
  
      
        </div>
      );
     }
 
  

export default App;

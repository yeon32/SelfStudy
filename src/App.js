import { React, Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';	
import { BrowserRouter, Routes, Route, Link, Switch } from 'react-router-dom';

import FirstPage from './FirstPage.js';
import Introduction from './Introduction.js';
import MainPage from './MainPage.js';
import MakeProblem from './MakeProblem.js';
import WrongAnswer from './WrongAnswer.js';
import SolveProblem from './SolveProblem.js';

function App() {
  return (
   
    <div className="App">
     <Routes>
       <Route path="/" element={<FirstPage />}/>
       <Route path="/MainPage" element={<MainPage />}/>
       <Route path="/MakeProblem" element={<MakeProblem />}/>
       <Route path="/Introduction" element={<Introduction />}/>
       <Route path="/WrongAnswer" element={<WrongAnswer />}/>
       <Route path="/SolveProblem" element={<SolveProblem />}/>
     </Routes>
        </div>

           
      );
    } 

export default App;









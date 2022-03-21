import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
//import { render } from '@testing-library/react';

import FirstPage from './components/FirstPage.js';
import MainPage from './components/MainPage.js';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
    <div className="App">
       <BrowserRouter> 
       <Route path="/" component={FirstPage} exact />
       <Route path="/MainPage" component={MainPage} />
       </BrowserRouter>
      </div>

      );
     }
    }
  

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import test1 from './cards/test1_f.jpg'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="Card-list">
            <img src={test1} className="Cards" />
            <p>test 1</p>
        </div>
      </div>
    );
  }
}

export default App;

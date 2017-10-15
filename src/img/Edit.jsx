import React, { Component } from 'react';
import logo from './logo.png';
import axios from 'axios';
import ImageLoader from 'react-imageloader';
import './App.css';
var URI = "https://postcard-server.herokuapp.com/api/";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };

  }
  componentWillMount(){
  }

  preloader() {
    return <img src="spinner.gif" alt = "#"/>;
  }
  
  render() {
    return (
      <div className="Edit">
        
      </div>
    );
  }
}

export default App;

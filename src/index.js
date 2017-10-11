import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import './index.css';
import App from './App.jsx';
import Edit from './Edit.jsx';


import registerServiceWorker from './registerServiceWorker';

const Home = () => (
    <div>  
        <li className="Router">
        Toggle Edit
        <br/>
        <Link to="/edit"><div className="off"></div></Link>
        </li>
        < App /> 
    </div>
  )
  

  const EditRouter = () => (
    <div>        
        <li className="Router">
        Toggle Edit
        <br/>
        <Link to="/"><div className="on"></div></Link>
        </li>
        <Edit /> 
    </div>
  )
ReactDOM.render(
    <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/edit" component={EditRouter}/>
    </div>
  </Router>, document.getElementById('root'));
registerServiceWorker();
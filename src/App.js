import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards:[{
        category:"Amandine Piu",
        id:"AP001",
        url:"./cards/AP001.jpg",
        name:"001"
      },{
        category:"Amandine Piu",
        id:"AP002",
        url:"./cards/AP002.jpg",
        name:"002"
      },{
        category:"Amandine Piu",
        id:"AP003",
        url:"./cards/AP003.jpg",
        name:"003"
      },{
        category:"Lali",
        id:"LALI001",
        url:"./cards/LALI001.jpg",
        name:"001"
      },{
        category:"Lali",
        id:"LALI002",
        url:"./cards/LALI002.jpg",
        name:"002"
      },{
        category:"Lali",
        id:"LALI003",
        url:"./cards/LALI003.jpg",
        name:"003"
      },{
        category:"Lali",
        id:"LALI004",
        url:"./cards/LALI004.jpg",
        name:"004"
      },{
        category:"Greetings From",
        id:"GF001",
        url:"./cards/GF001.jpg",
        name:"Croatia"
      },{
        category:"Greetings From",
        id:"GF002",
        url:"./cards/GF002.jpg",
        name:"Greece"
      },{
        category:"Greetings From",
        id:"GF003",
        url:"./cards/GF003.jpg",
        name:"Hungary"
      },{
        category:"Greetings From",
        id:"GF004",
        url:"./cards/GF004.jpg",
        name:"Iceland"
      }]
    
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div>
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Postcard Organizer</h2>
          </div>

        </div>
        <div className="Search">
            <input type="text" name="searchbox" id="searchbox"/>
            <button>Search</button>
        </div>
        <ul className="Card-list" >
          {this.state.cards.map(function(card){
            return (
            <li key={card.id}>
              <img src={card.url} className="Cards" alt="cards"/>
              <p>{card.category}</p>
              <p>{card.name}</p>
              
            </li>);
          })}
            
        </ul>
      </div>
    );
  }
}

export default App;

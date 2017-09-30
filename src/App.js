import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flipped:false,
      category:"All",
      keywords:"",
      cards:[]
    };

    // This binding is necessary to make `this` work in the callback
    this.changeCategory = this.changeCategory.bind(this);
    this.changeKeywords = this.changeKeywords.bind(this);
  }
  componentWillMount(){
    var data = require('./data.json');
    this.setState({
      cards: data
    });
  }
  

  changeCategory(event){
    console.log(event);
    this.setState({
      category: event.target.value
    });
  }
  changeKeywords(event){
    this.setState({
      keywords:event.target.value
    })
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
        <div className="Filters">
            <div>
            <label htmlFor="category">Category</label>
            <select name="category" id="categoryFilter" value={this.state.category} onChange={this.changeCategory}>
              <option value="All">All</option>
              <option value="Amandine Piu">Amandine Piu</option>
              <option value="Lali">Lali</option>
              <option value="Greetings From">Greetings From</option>              
            </select>
            </div>
            <div>
            <label htmlFor="searchbox">Keywords</label>
            <input type="text" name="searchbox" id="searchbox" value={this.state.keywords} onChange={this.changeKeywords}/>
            <button>Search</button>
            </div>
        </div>
        <ul className="Card-list" >
          {this.state.cards.map((card)=>{
            if (this.state.category==="All"||this.state.category===card.category)
              return (
                <li key={card.id}>
                  <img src={card.url} className="Cards" alt="cards"/>
                  <p>{card.category}</p>
                  <p>{card.name}</p>
                </li>);
              
              else{
                  return null;
                }
            })}
              
        </ul>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.png';
import axios from 'axios';
import ImageLoader from 'react-imageloader';
import './App.css';

let ENV = {
  MLAB_API_KEY: process.env.MLAB_API_KEY,
  API_KEY: process.env.API_KEY
};     

console.log(process.env)

var API_KEY = ENV['MLAB_API_KEY'],
URI = ENV['MLAB_URI'],
SUFFIX = 'categories?API_KEY='+ API_KEY;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count:0,
      flipped:false,
      category:"All",
      keywords:"",
      cards:[],
      showDetail:false,
      currentCard:{}
    };

    // This binding is necessary to make `this` work in the callback
    this.changeCategory = this.changeCategory.bind(this);
    this.changeSubset = this.changeSubset.bind(this);
    this.changeKeywords = this.changeKeywords.bind(this);
    this.toggleImage = this.toggleImage.bind(this);
  }
  componentWillMount(){
    var data = require('./data.json');
    axios.get(URI+SUFFIX)
    .then(res => {
      console.log()
      const posts = res.data.data.children.map(obj => obj.data);
      this.setState({ posts });
    });
    this.setState({
      countries:require('./countries.json'),
      cards: data,
      count:data.length
    });
  }

  preloader() {
    return <img src="spinner.gif" />;
  }
  _updateFilteredList(){
    this.setState({
      count:this.filteredList.childNodes.length
    }
  )}
  changeCategory(event){
    event.preventDefault();
    this.setState({
      category: event.target.value
    },this._updateFilteredList);
  }
  changeSubset(event){
    event.preventDefault();
    this.setState({
      subset: event.target.value
    },this._updateFilteredList);
  }
  changeKeywords(event){
    this.setState({
      keywords:event.target.value
    },this._updateFilteredList)
  }

  toggleImage(e){
    let current = e.target.parentNode.parentNode;
    console.log(current)
    this.setState({
      showDetail:!this.state.showDetail,
      currentCard:{
        name:current.childNodes[2]?(current.childNodes[1].innerHTML+" "+current.childNodes[2].innerHTML):"",
        url:e.target.src
      }
    })
  }
  render() {
    return (
      <div className="App">
        {this.state.showDetail?<div><div id="mask" onClick={this.toggleImage}></div>
        <div className="Card-detail">
          <img src={this.state.currentCard.url} alt="#" />
          <p>{this.state.currentCard.name}</p>
          </div></div>
          :null}
        <div className="App-header">
          <div>
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Postcard</h2> 
            <h2>Organizer</h2>
          </div>

        </div>
        <div className="Filters">
            <div>
            <label htmlFor="category">Category</label>
            <select name="category" id="categoryFilter" value={this.state.category} onChange={this.changeCategory}>
              <option value="All">All</option>
              { this.state.countries.map((country)=>{
                return(
                <option value={country}>{country}</option>);
              })}            
            </select>
            <label htmlFor="subset">Subset</label>
            <select name="subset" id="subsetFilter" value={this.state.subset} onChange={this.changeSubset}>
              <option value="All">All</option>           
            </select>
            </div>
            <div>
            <label htmlFor="searchbox">Keywords</label>
            <input type="text" name="searchbox" id="searchbox" value={this.state.keywords} onChange={this.changeKeywords}/>
            </div>

            <p>Total of {this.state.count} cards</p>
        </div>
        <ul className="Card-list" ref={(list)=>{this.filteredList = (list)?list:this.state.cards}} onClick={this.toggleImage}>
           { this.state.cards.map((card)=>{
            if (this.state.category==="All"||this.state.category===card.category){
              let re = new RegExp(this.state.keywords!==""?this.state.keywords:"","i");

              return (re.test(card.category)||re.test(card.name))? 
                (
                <li key={card.id}  className="Cards">
                  <ImageLoader src={card.url} alt="#"
                  preloader={this.preloader}>
                  </ImageLoader>
                  <p>{card.category}</p>
                  <p>{card.name}</p>
                </li>): 
                null;
  
            }else return null;
            })}  
        </ul>
      </div>
    );
  }
}

export default App;

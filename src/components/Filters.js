import React from 'react'
import PropTypes from 'prop-types'
import FilterCards from '../containers/FilterCards'

const Filters = ()=>(
    <div className="Filters">
    <div>
    <label htmlFor="category">Category</label>
    <select name="category" id="categoryFilter" value={this.state.category} onChange={this.changeCategory}>
      <option value="All">All</option>
      { this.state.countries.map((country)=>{
        return(
        <option key={country} value={country}>{country}</option>);
      })}            
    </select>
    <label htmlFor="subset">Subset</label>
    <select name="subset" id="subsetFilter" value={this.state.subset} onChange={this.changeSubset}>
      <option value="All">All</option>   
      { this.state.currentCategory.map((subset)=>{
        return(
        <option key={subset} value={subset}>{subset}</option>);
      })}          
    </select>
    </div>
    <div>
    <label htmlFor="searchbox">Keywords</label>
    <input type="text" name="searchbox" id="searchbox" value={this.state.keywords} onChange={this.changeKeywords}/>
    </div>

    <p>Total of {this.state.count} cards</p>
    </div>
)

export default Filters
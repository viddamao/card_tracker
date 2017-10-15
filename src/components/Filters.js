import React from 'react'
import PropTypes from 'prop-types'
import FilterCards from '../containers/FilterCards'

const Filters = (categories = require('../img/countries.json'), subsets, currentCategory)=>(
    <div className="Filters">
    <div>
    <label htmlFor="category">Category</label>
    <select name="category" id="categoryFilter">
      <option value="All">All</option>
      { categories.map((category)=>{
        <option key={category} value={category}>{category}</option>
      })}            
    </select>
    <label htmlFor="subset">Subset</label>
    <select name="subset" id="subsetFilter">
      <option value="All">All</option>   
      { currentCategory.map((subset)=>{
        <option key={subset} value={subset}>{subset}</option>
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

Filters.propTypes = {
  categories: PropTypes.array.isRequired,
  subsets: PropTypes.object.isRequired,
  currentCategory: PropTypes.array.isRequired
}


export default Filters
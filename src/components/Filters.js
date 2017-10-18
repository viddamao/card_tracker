import React from 'react'
import PropTypes from 'prop-types'
import FilterCards from '../containers/FilterCards'

const Filters = (categories, subsets, currentCategory)=>(
    <div className="Filters">
    </div>
)

Filters.propTypes = {
  categories: PropTypes.array.isRequired,
  subsets: PropTypes.object.isRequired,
  currentCategory: PropTypes.array.isRequired
}


export default Filters
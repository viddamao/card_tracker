import React from 'react'
import PropTypes from 'prop-types'
import FilterCards from '../containers/FilterCards'

const Filters = (categories, subsets, currentCategory)=>(
    <div className="Filters">
    </div>
)

Filters.propTypes = {
  categories: PropTypes.array,
  subsets: PropTypes.object,
  currentCategory: PropTypes.array
}


export default Filters
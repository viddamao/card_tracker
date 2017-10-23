import { connect } from 'react-redux'
import { setFilters } from '../actions'
import CardList from '../components/Card'

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.filters
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => {
        dispatch(setFilters(ownProps.filterType,ownProps.value))
    }
})

const FilterCards = connect(
    mapStateToProps,
    mapDispatchToProps
)(CardList)

export default FilterCards
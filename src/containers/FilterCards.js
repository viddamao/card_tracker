import { connect } from 'react-redux'
import { setCategoryFilter } from '../actions'
import Card from '../components/Card'

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.categoryFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => {
        dispatch(setCategoryFilter(ownProps.filter))
    }
})

const FilterCards = connect(
    mapStateToProps,
    mapDispatchToProps
)(Card)

export default FilterCards
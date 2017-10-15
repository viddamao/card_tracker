import { combineReducers } from 'redux'
import cards from './cards'
import categoryFilter from './categoryFilter'
import subsetFilter from './subsetFilter'

const cardApp = combineReducers({
    cards,
    categoryFilter,
    subsetFilter
})

export default cardApp
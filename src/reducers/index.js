import { combineReducers } from 'redux'
import cards from './cards'
import categoryFilter from './categoryFilter'
import subsetFilter from './subsetFilter'
import {fetchCards, fetchCategories} from './fetchData'

const cardApp = combineReducers({
    cards,
    categoryFilter,
    subsetFilter,
    fetchCards,
    fetchCategories
})

export default cardApp
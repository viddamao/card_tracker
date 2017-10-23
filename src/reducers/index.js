import { combineReducers } from 'redux'
// import cards from './cards'
import filter from './filter'
import {cards, categories} from './fetchData'

const cardApp = combineReducers({
    filter,
    cards,
    categories 
})

export default cardApp
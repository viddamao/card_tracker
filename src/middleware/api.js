import axios from 'axios'
import * as actions from '../actions'
var categoryList = require('../img/countries.json')
var URI = "https://postcard-server.herokuapp.com/api/"

export const fetchCards = (page) => {
    return dispatch => {
        dispatch(actions.loadingCards(true))
        axios.get(URI + 'postcards/' + page)
            //URI+SUFFIX)
            .then(res => (res.data))
            .then((cards) => dispatch(actions.receiveCards(cards)))
            .catch(() => dispatch(actions.loadingCardsError(true)))
    }
}

export const fetchCategories = () => {

    return dispatch => {
        dispatch(actions.loadingCategories(true))
        axios.get(URI + 'categories')
            //URI+SUFFIX)
            .then(res => {

                const categories = { "All": [] }
                res.data.forEach((category) => {
                        const name = category.name,
                            subsets = category.subsets
                        categories[name] = subsets
                    })
                    // console.log(categories)
                return categories
            })
            .then((categories) => dispatch(actions.receiveCategories(categories)))
            .then(() => {
                dispatch(actions.receiveCategoryList(categoryList))
            })
            .catch(() => dispatch(actions.loadingCategoriesError(true)))
    }
}
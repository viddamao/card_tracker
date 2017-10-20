import axios from 'axios'
import * as actions from '../actions'
var URI = "https://postcard-server.herokuapp.com/api/"

export const fetchCards = (page) => {   
    return dispatch => {
    dispatch(actions.loadingCards(true));
    axios.get(URI + 'postcards/'+page)
    //URI+SUFFIX)
    .then(res => {
        // console.log(res.data)
        const cards = res.data;
    })
    .then((cards) => dispatch(actions.receiveCards(cards)))
    .catch(() => dispatch(actions.loadingCardsError(true)));
    }
}

export const fetchCategories = () => {

return dispatch => {
dispatch(actions.loadingCategories(true));
axios.get(URI + 'categories')
    //URI+SUFFIX)
    .then(res => {

        const categories = { "All": [] }
        res.data.forEach((category) => {
            const name = category.name,
                subsets = category.subsets
            categories[name] = subsets
        })
        console.log(categories)
    })
    .then((categories) => dispatch(actions.receiveCategories(categories)))
    .catch(() => dispatch(actions.loadingCategoriesError(true)));
    }
}
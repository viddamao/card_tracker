import { fetchCategories, fetchCards } from '../middleware/api'
let nextCardId = 0


export function loadingCategories(bool) {
    return {
        type: 'LOADING_CATEGORIES',
        is_loading:bool
    };
}

export function loadingCategoriesError(bool) {
    return {
        type: 'LOADING_CATEGORIES_ERROR',
        loading_error:bool
    };
}

export const receiveCategories = (categories) => ({
    type: 'RECEIVE_CATEGORIES',
    categories
})

export function loadingCards(bool) {
    return {
        type: 'LOADING_CARDS',
        is_loading:bool
    };
}

export function loadingCardsError(bool) {
    return {
        type: 'LOADING_CARDS_ERROR',
        loading_error:bool
    };
}

export const receiveCards = (cards) => ({
    type: 'RECEIVE_CARDS',
    cards
})

export const addCard = (text) => ({
    type: 'ADD_CARD',
    id: nextCardId++,
    text
})

export const setCategoryFilter = (categoryFilter) => ({
    type: 'SET_CATEGORY_FILTER',
    categoryFilter
})

export const setSubsetFilter = (subsetFilter) => ({
    type: 'SET_SUBSET_FILTER',
    subsetFilter
})

export const setKeywordsFilter = (keywordsFilter) => ({
    type: 'SET_KEYWORDS_FILTER',
    keywordsFilter
})


export const showCardDetail = (id) => ({
    type: 'SHOW_CARD_DETAIL',
    id
})
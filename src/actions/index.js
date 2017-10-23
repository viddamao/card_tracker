
export function loadingCategories(bool) {
    return {
        type: 'LOADING_CATEGORIES',
        is_loading:bool
    }
}

export function loadingCategoriesError(bool) {
    return {
        type: 'LOADING_CATEGORIES_ERROR',
        loading_error:bool
    }
}

export const receiveCategories = (categories) => ({
    type: 'RECEIVE_CATEGORIES',
    categories
})

export function loadingCards(bool) {
    return {
        type: 'LOADING_CARDS',
        is_loading:bool
    }
}

export function loadingCardsError(bool) {
    return {
        type: 'LOADING_CARDS_ERROR',
        loading_error:bool
    }
}

export const receiveCards = (cards) => ({
    type: 'RECEIVE_CARDS',
    cards
})

export const addCard = (text) => ({
    type: 'ADD_CARD'
})

export const setFilters = (filter_type,value) => ({
    type: 'SET_FILTERS',
    filter_type,
    value
})

export const showCardDetail = (id) => ({
    type: 'SHOW_CARD_DETAIL',
    id
})
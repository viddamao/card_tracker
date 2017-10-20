//Loading cards
export function fetchCards(state = [], action) {
    switch (action.type) {
        case 'LOADING_CARDS_ERROR':
            return action.loading_error

        case 'LOADING_CARDS':
            return action.is_loading

        case 'RECEIVE_CARDS':
            return {
                ...state,
                cards: action.cards
            }

        default:
            return state
    }
}

export function fetchCategories(state = [], action) {
    switch (action.type) {
        case 'LOADING_CATEGORIES_ERROR':
            return action.loading_error

        case 'LOADING_CATEGORIES':
            return action.is_loading

        case 'RECEIVE_CATEGORIES':
            return action.categories

        default:
            return state
    }
}
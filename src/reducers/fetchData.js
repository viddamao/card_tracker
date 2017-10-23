//Loading cards
export function cards(state = [], action) {
    switch (action.type) {
        case 'LOADING_CARDS_ERROR':
            return {...state,
                loading_error: action.loading_error
            }

        case 'LOADING_CARDS':
            return {...state,
                card_is_loading: action.is_loading
            }

        case 'RECEIVE_CARDS':
            return {
                ...state,
                cards: action.cards
            }

        default:
            return state
    }
}

export function categories(state = [], action) {
    switch (action.type) {
        case 'LOADING_CATEGORIES_ERROR':
            return {...state,
                loading_error: action.loading_error
            }

        case 'LOADING_CATEGORIES':
            return {...state,
                category_is_loading: action.is_loading
            }

        case 'RECEIVE_CATEGORIES':
            return {
                ...state,
                categories: action.categories
            }

        default:
            return state
    }
}
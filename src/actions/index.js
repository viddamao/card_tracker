let nextCardId = 0

export const requestCategories = () => ({
    type: 'REQUEST_CATEGORIES'
})

export const receiveCategories = (json) => ({
    type: 'RECEIVE_CATEGORIES',
    categories: json.data.children.map(child => child.data)
})

export const requestCards = () => ({
    type: 'REQUEST_CARDS'
})

export const receiveCards = (json) => ({
    type: 'RECEIVE_CARDS',
    cards: json.data.children.map(child => child.data)
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
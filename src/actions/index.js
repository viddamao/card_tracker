let nextCardId = 0
export const addCard = (text) => ({
  type: 'ADD_TODO',
  id: nextCardId++,
  text
})

export const setCategoryFilter = (filter) => ({
  type: 'SET_CATEGORY_FILTER',
  filter
})

export const setSubsetFilter = (filter) => ({
    type: 'SET_SUBSET_FILTER',
    filter
  })

  export const setKeywordsFilter = (filter) => ({
    type: 'SET_KEYWORDS_FILTER',
    filter
  })
    

export const showCardDetail = (id) => ({
  type: 'SHOW_CARD_DETAIL',
  id
})
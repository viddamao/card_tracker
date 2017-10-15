const subsetFilter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case 'SET_SUBSET_FILTER':
            return action.filter
        default:
            return state
    }
}

export default subsetFilter
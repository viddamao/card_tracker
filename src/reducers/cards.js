const cards = (state = [], action) => {
    switch (action.type) {
        case 'ADD_CARDS':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    selected: false
                }
            ]
        case 'TOGGLE_CARD':
            return state.map(card =>
                (card.id === action.id) ? {...card, selected: !card.selected } :
                card
            )
        default:
            return state
    }
}

export default cards
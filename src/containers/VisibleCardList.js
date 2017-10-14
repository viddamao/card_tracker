import { connect } from 'react-redux'
import { showCardDetail } from '../actions'
import CardList from '../components/CardList'

const getVisibleCards = (cards, category_filter, subset_filter, keywords_filter) => {
 //TODO
    switch (category_filter) {
    case 'SHOW_ALL':
      return cards
    case 'SHOW_COMPLETED':
      return cards.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return cards.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + cards)
  }
}

const mapStateToProps = (state) => ({
  cards: getVisibleCards(state.cards, state.categoryFilter, state.subsetFilter, state.keywordsFilter)
})

const mapDispatchToProps = {
  onCardClick: showCardDetail
}

const VisibleCardList = connect(
  mapStateToProps,
  mapDispatchToProps
)(CardList)

export default VisibleCardList
import React from 'react'
import PropTypes from 'prop-types'
import Card from './Card'

const CardList = ({ cards, onCardClick }) => (
  <ul>
    {cards.map(card =>
      <Card
        key={card.id}
        {...card}
        onClick={() => onCardClick(card.id)}
      />
    )}
  </ul>
)

CardList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    selected: PropTypes.bool.isRequired,
    card_id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    subset: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onCardClick: PropTypes.func.isRequired
}

export default CardList
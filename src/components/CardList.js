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
    card_id: PropTypes.String.isRequired,
    url: PropTypes.String.isRequired,
    subset: PropTypes.String.isRequired,
    name: PropTypes.String.isRequired
  }).isRequired).isRequired,
  onCardClick: PropTypes.func.isRequired
}

export default CardList
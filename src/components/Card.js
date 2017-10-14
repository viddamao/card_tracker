import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ onClick, selected, url, subset, name }) => (
    <li onClick={onClick} className="Cards">
        {/* <ImageLoader src={card.url} alt="#"
            preloader={this.preloader}>
        </ImageLoader> */}
        <img src={card.url} alt="#"/>
        <p>{card.subset}</p>
        <p>{card.name}</p>
    </li>
)

Card.propTypes = {
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
  card_id: PropTypes.String.isRequired,
  url: PropTypes.String.isRequired,
  subset: PropTypes.String.isRequired,
  name: PropTypes.String.isRequired
}

export default Card
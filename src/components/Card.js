import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ onClick, selected, url, subset, name }) => (
    <li onClick={onClick} className="Cards">
        {/* <ImageLoader src={card.url} alt="#"
            preloader={this.preloader}>
        </ImageLoader> */}
        <img src={url} alt="#"/>
        <p>{subset}</p>
        <p>{name}</p>
    </li>
)

Card.propTypes = {
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
  card_id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  subset: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default Card
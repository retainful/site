import React from 'react'
import { Link } from 'gatsby'
import { groupBy } from 'lodash'
import Img from 'gatsby-image'
const Card = props => {
  const childrenArray = React.Children.toArray(props.children)
  const slottedChildren = groupBy(childrenArray, 'props.slot')
  const cardClass = `col-md-${props.size} ${props.className}`
  return (
    <div className={cardClass}>
      <div className="card_inner">
        <div
          className="card_image"
          style={{ maxWidth: '180px', maxHeight: '180px', margin: '0 auto' }}
        >
          {slottedChildren['card-image']}
        </div>
        <h3 className="card_title text-dark text-center">
          {slottedChildren['card-title']}
        </h3>
        <div className="card_links">{slottedChildren['card-links']}</div>
        <div className="card-body">{slottedChildren['card-body']}</div>
      </div>
      <div className="card_button">{slottedChildren['card-button']}</div>
    </div>
  )
}

Card.defaultProps = {
  size: '',
  className: '',
}

export default Card

import React from 'react'
import FetchImage from './FetchImage'

const IndividualSelectedBreed = (props) => {
  return (
    <div className="individual-gallery">
        <p>{props.item}</p>
        <div>
          <FetchImage item={props.item} />
          <FetchImage item={props.item} />
          <FetchImage item={props.item} />
          <FetchImage item={props.item} />
          <FetchImage item={props.item} />
          <FetchImage item={props.item} />
        </div>
    </div>
  )
}

export default IndividualSelectedBreed
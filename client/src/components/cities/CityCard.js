import React from 'react'
import { getItineraries } from '../../store/actions/itineraryActions';
import { connect } from 'react-redux'

const CityCard = ({ name, img, getItineraries }) => {
  return (
    //onClick get Itineraries by City(name)
    <div className="card citycard"
      onClick={() => getItineraries(name)}>
      <img
        src={img}
        alt=""
        className="city-img"
      />
      <span
        className="card-title activator grey-text text-darken-4">{name}
      </span>
    </div>
  )
}

export default connect(null, { getItineraries })(CityCard)
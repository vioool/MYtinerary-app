import { deleteItinerary, getItinerary } from '../../store/actions/itineraryActions';
import React from 'react'
import { connect } from 'react-redux'

const ItineraryCreatorCard = ({ title, _id, deleteItinerary, getItinerary }) => {
  return (
    <div className="card">
      <span className="card-title activator grey-text text-darken-4">{title}</span>
      <div className="icons">
        <i
          onClick={() => deleteItinerary(_id)}
          className="fas fa-trash-alt">
        </i>
        <i
          onClick={() => getItinerary(_id)}
          className="fas fa-pencil-alt">
        </i>
      </div>
    </div>
  )
}


export default connect(null, { deleteItinerary, getItinerary })(ItineraryCreatorCard)
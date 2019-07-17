import { deleteCity, getCity } from '../../store/actions/cityActions';
import React from 'react'
import { connect } from 'react-redux'

const CityCreatorCard = ({ name, _id, deleteCity, getCity }) => {
  return (
    <div className="card">
    <div className="complex">
      <span className="card-title activator grey-text text-darken-4">{name}</span>
      <div className="icons">
        <i
          onClick={() => deleteCity(_id)}
          className="fas fa-trash-alt">
        </i>
        <i
          onClick={() => getCity(_id)}
          className="fas fa-pencil-alt">
        </i>
        </div>
      </div>
    </div>
  )
}

export default connect(null, { deleteCity, getCity })(CityCreatorCard)
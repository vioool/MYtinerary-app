import React from 'react'

const CityCard = ({ name, img }) => {
  return (
    <div className="card">
      {/* <div className="card-image"> */}
        <img src={img} alt="" className="city-img" />
        <span className="card-title activator grey-text text-darken-4">{name}</span>
      {/* </div> */}
    </div>
  )
}

export default CityCard;
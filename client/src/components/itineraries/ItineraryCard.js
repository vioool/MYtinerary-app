import React from 'react'

const ItineraryCard = ({ name, img }) => {
    return (
        <div className="card">
            <img
                src={img}
                alt={`${name} picture`}
                className="itinerary-img" />
            <span
                className="card-title">{name}
            </span>
        </div>
    )
}

export default ItineraryCard
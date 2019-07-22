import React from 'react'

const UserCard = ({ name, img, email }) => {
  return (
    <div className="card">
      <img
        src={img}
        alt=""
        className="avatar"
      />
      <span
        className="card-title activator grey-text text-darken-4">{name}
      </span>
      <p>{email}</p>
    </div>
  )
}

export default UserCard
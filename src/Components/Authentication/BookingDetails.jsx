import React from 'react'

const BookingDetails = ({formdata}) => {

  return (
    <div>
        <h1>The Form Details is:</h1>
        <h2>Name:{formdata.name}</h2>
        <h2>Gender:{formdata.gender}</h2>
        <h2>Profession:{formdata.prof}</h2>
        <h2>City:{formdata.city}</h2>
    </div>
  )
}

export default BookingDetails

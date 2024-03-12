import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Booking from '../Authentication/Booking'
import Login from '../Authentication/Login'
import Header from '../Layout/Header'
import BookingDetails from '../Authentication/BookingDetails'

const Routing = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="booking" element={<Booking />} />
        <Route path="login" element={<Login />} />
        <Route path="details" element={<BookingDetails />} />
      </Routes>

    </BrowserRouter>
  )
}

export default Routing
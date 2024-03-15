import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Booking from "../Authentication/Booking";
import Login from "../Authentication/Login";
import Header from "../Layout/Header";
import BookingDetails from "../Authentication/BookingDetails";
import Home from "../Authentication/Home";
import About from "../Authentication/About";
import Product from "../Authentication/Product";

const Routing = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About/>} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/login" element={<Login />} />
        <Route path="/details" element={<BookingDetails />} />
        <Route path="/product" element={<Product/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;

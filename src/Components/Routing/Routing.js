import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Booking from "../Authentication/Booking";
import Login from "../Authentication/Login";
import Header from "../Layout/Header";
import BookingDetails from "../Authentication/BookingDetails";
import Home from "../Authentication/Home";
import About from "../Authentication/About";
import Product from "../Authentication/Product";
import Cart from "../Authentication/Cart";
import ProductDetails from "../Authentication/ProductDetails";
import Parentform from "../FormComponent/Parentform";
import Form1 from "../FormComponent/Form1";
import Formdetails from "../FormComponent/Formdetails";
import Accordian from "../FormComponent/Accordian";
import ModalCompo from "../FormComponent/ModalCompo";
import Todolist from "../FormComponent/Todolist";

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
        <Route path="/cart" element={<Cart/>} />
        <Route path="product/prodetails" element={<ProductDetails/>} />
        <Route path="/parentform" element={<Parentform/>} />
        <Route path="/formdetails" element={<Formdetails/>} />    
        <Route path="/accordian" element={<Accordian/>} />  
        <Route path="/modal" element={<ModalCompo/>} />   
        <Route path="/todolist" element={<Todolist/>} />   

        
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;

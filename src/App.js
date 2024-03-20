import React, { Component } from "react";

import "./App.css";
import Login from "./Components/Authentication/Login";
import Booking from "./Components/Authentication/Booking";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Layout/Header";
import Routing from "./Components/Routing/Routing";
import Parentform from "./Components/FormComponent/Parentform";
import ModalCompo from "./Components/FormComponent/ModalCompo";
import Accordian from "./Components/FormComponent/Accordian";
import AccoData from "./Components/FormComponent/AccoData";
import Todolist from "./Components/FormComponent/Todolist";

// import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      {/*<Login/>*/}
      {/* <Booking /> */}
      {/* <Header/> */}
      <Routing />
      {/* <Parentform/> */}
      {/* <ModalCompo/> */}
    {/* <Accordian/> */}
    {/* <AccoData/> */}
    {/* <Todolist/> */}
    </div>
  );
}

export default App;

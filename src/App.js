import React, { Component } from 'react';

import './App.css';
import Login from './Components/Authentication/Login'
import Booking from './Components/Authentication/Booking';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Layout/Header';
import Routing from './Components/Routing/Routing';


// import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      {/* <Login /> */}
      {/*<Login/>*/}
      {/* <Booking /> */}

      {/* <Header/> */}

      <Routing />
    </div>
  );
}


export default App;

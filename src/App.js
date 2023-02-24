import React, { BrowserRouter } from 'react-router-dom'
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Data from './Components/Data'
import {Route, Routes } from 'react-route-dom'
import Home from './Components/Home';
import Nav from './Components/Nav'
import Fishone from './Components/Fishone';



function App() {







return (
    <div className="App">
     <div className="header-container">
      <Header/>
     </div>

    <div className="main-container">
      <Main/>
    </div>


    </div>
  );
}





export default App;

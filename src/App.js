import { BrowserRouter } from 'react-router-dom'
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Data from './Components/Data'
import {Route, Routes } from 'react-router-dom'
import Home from './Components/Catlist';
import Nav from './Components/Nav'
import Header from './Components/Header'
import Main from './Components/Main'
 


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


import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
//Api key--> d05fa37b05dc45709bc66b2916317806
export default class App extends Component {
  render() {
    return (
      <Router>

        <Navbar />

        <Routes>

          {/*
          /user--> component 1
          /user/home-->component 2
        */ }

          


          <Route exact path="/" element={<News key='1' category='general'/>} />
          <Route exact path="/business" element={<News key='2' category='business'/>} />
          <Route exact path="/entertainment" element={<News key='3' category='entertainment'/>} />
          <Route exact path="/health" element={<News key='4' category='health'/>} />
          <Route exact path="/science" element={<News key='5' category='science'/>} />
          <Route exact path="/sports" element={<News key='6' category='sports'/>} />
          <Route exact path="/technology" element={<News key='7' category='technology'/>} />


        </Routes>



        {/*<About/>*/}
      </Router>
    )
  }
}

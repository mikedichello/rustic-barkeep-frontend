import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Products from '../Components/Products.js'
import Header from '../Components/Header.js'
import SliderView from "../Components/Slider";
import './style.css'

class App extends Component {
  render() {
    return (
      <>
        <Header />  
        <SliderView />
        <Products />
      </>
    )
  }
}

export default App;

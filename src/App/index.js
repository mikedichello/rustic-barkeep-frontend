import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Products from '../Components/Products.js'
import Header from '../Components/Header.js'
import SliderView from "../Components/Slider";
import MainContent from "../Components/MainContent.js";
import SocialMedia from "../Components/SocialMedia.js";
import './style.css'
import Footer from "../Components/Footer.js";

const baseURL = 'http://192.241.135.177/items';

class App extends Component {
  render() {
    return (
      <>
        <Header />  
        <SliderView />
        <MainContent />
        <Products baseURL={baseURL}/>
        <SocialMedia />
        <Footer />
      </>
    )
  }
}

export default App;

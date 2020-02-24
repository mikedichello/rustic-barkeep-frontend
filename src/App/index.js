import React, { Component } from "react";
import "./style.css";
import Products from '../Components/Products.js'
import Header from '../Components/Header.js'

class App extends Component {
  render() {
    return (
      <>
        <Header />  
        <Products />
      </>
    )
  }
}

export default App;

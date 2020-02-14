import React, { Component } from "react";
import "./style.css";

class App extends Component {
  render() {
    return <button class="snipcart-add-item"
    data-item-id="starry-night"
    data-item-price="79.99"
    data-item-url="/"
    data-item-description="High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh."
    data-item-image="/assets/images/starry-night.jpg"
    data-item-name="The Starry Night">
    Add to cart
  </button>;
  }
}

export default App;

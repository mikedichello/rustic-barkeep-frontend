import React, { Component } from 'react';

class BuyButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.product.SKU,
            name: props.product.Name,
            price: props.product.Price,
            image: props.product.Image[0].url,
            description: props.product.Description,
            url: "https://localhost:1337/items",
            custom1Name: props.product.Custom1Name,
            custom1Options: props.product.Custom1Options,
            custom2Name: props.product.Custom2Name,
            custom2Options: props.product.Custom2Options,
            giftNote: props.product.GiftNote
        }
    }

    render() {
        return (
            <button
                className="snipcart-add-item BuyButton"
                data-item-id={this.state.id}
                data-item-name={this.state.name}
                data-item-price={this.state.price}
                data-item-image={`http://localhost:1337/${this.state.image}`}
                data-item-url={this.state.url}
                data-item-description={this.state.description}
                data-item-custom1-name={this.state.custom1Name}
                data-item-custom1-options={this.state.custom1Options}
                data-item-custom2-name={this.state.custom2Name}
                data-item-custom2-options={this.state.custom2Options}
                data-item-custom3-name="Gift note"
                >
                ADD TO CART ({this.state.price}$)
            </button>
        );
    }
}

export default BuyButton;
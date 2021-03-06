import React, { Component } from 'react';
import { Button } from 'reactstrap';

class BuyButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.product.SKU,
            name: props.product.Name,
            price: props.product.Price,
            image: props.product.Image[0].url,
            description: props.product.Description,
            url: this.props.baseURL,
            custom1Name: props.product.Custom1Name,
            custom1Options: props.product.Custom1Options,
            custom2Name: props.product.Custom2Name,
            custom2Options: props.product.Custom2Options,
            giftNote: props.product.GiftNote
        }
    }

    render() {
        return (
            <Button
                className="snipcart-add-item BuyButton"
                outline
                color="secondary"
                data-item-id={this.state.id}
                data-item-name={this.state.name}
                data-item-price={this.state.price}
                data-item-image={`https://barback.dichello.dev/${this.state.image}`}
                data-item-url={this.state.url}
                data-item-description={this.state.description}
                data-item-custom1-name={this.state.custom1Name}
                data-item-custom1-options={this.state.custom1Options}
                data-item-custom2-name={this.state.custom2Name}
                data-item-custom2-options={this.state.custom2Options}
                data-item-custom3-name="Gift note"
                >
                <i className="fas fa-cart-plus fa-2x"></i> ({this.state.price}$)
            </Button>
        );
    }
}

export default BuyButton;
import React, {Component} from 'react';
import BuyButton from './BuyButton.js'
import '../App/products.css';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Col, CardDeck, Button
  } from 'reactstrap';

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products : []
        }
        this.getProducts = this.getProducts.bind(this);
    }

    componentDidMount() {
        this.getProducts()
    }

    getProducts() {
        fetch(this.props.baseURL)
            .then(res => res.json())
            .then(jsonedProducts => this.setState({products: jsonedProducts}))
            .catch(err => console.log(err))
    }



    render() {
        return (
            <main className="container-fluid products-container">
                <CardDeck>
                    {this.state.products.map(product => {
                        return(
                                <Col lg="4">
                                    <Card className="product-card mx-5">
                                        <CardImg className="img-fluid product-image" top width="100%" src={`https://barback.dichello.dev${product.Image[0].url}`} alt="Card image cap" />
                                        <CardBody>
                                        <CardTitle className="product-title">{product.Name}</CardTitle> 
                                        <BuyButton baseURL={this.props.baseURL} product={product} />
                                        </CardBody>
                                    </Card>
                                </Col>
                        );
                    })}
                </CardDeck>
            </main>
        )
    }
}

export default Products
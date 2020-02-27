import React, {Component} from 'react';
import BuyButton from './BuyButton.js'
import '../App/products.css';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Row, Col, CardDeck
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
        fetch(`http://localhost:1337/items`)
            .then(res => res.json())
            .then(jsonedProducts => this.setState({products: jsonedProducts}))
            .catch(err => console.log(err))
    }



    render() {
        return (
            <main className="container products-container">
                <CardDeck>
                    {this.state.products.map(product => {
                        return(
                                <Col lg="4">
                                    <Card className="my-5">
                                        <CardImg className="img-fluid" top width="100%" src={`http://localhost:1337/${product.Image[0].url}`} alt="Card image cap" />
                                        <CardBody>
                                        <CardTitle>{product.Name}</CardTitle>
                                        {/* {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
                                        {/* <CardText>{product.Description}</CardText>  */}
                                        <BuyButton product={product} />
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
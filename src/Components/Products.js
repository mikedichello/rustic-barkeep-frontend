import React, {Component} from 'react';
import BuyButton from './BuyButton.js'
import '../App/products.css';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Row, Col
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
            <main>
                {this.state.products.map(product => {
                    return(
                        <Row>
                            <Col>
                                <Card>
                                    <CardImg className="img-fluid" top width="100%" src={`http://localhost:1337/${product.Image[0].url}`} alt="Card image cap" />
                                    <CardBody>
                                    <CardTitle>{product.Name}</CardTitle>
                                    {/* <CardSubtitle>Card subtitle</CardSubtitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText> */}
                                    <BuyButton product={product} />
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    );
                })}
            </main>
        )
    }
}

export default Products
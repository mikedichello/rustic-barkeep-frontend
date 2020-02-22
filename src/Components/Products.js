import React, {Component} from 'react';
import BuyButton from './BuyButton.js'
import '../App/products.css';

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
                        <div className="product-card" key={product.id}>
                            <img src={`http://localhost:1337/${product.Image[0].url}`}/>
                            <div className="product-details">
                                <h1>{product.Name}</h1>
                                <BuyButton product={product} />
                            </div>
                        </div>
                    )
                })}
            </main>
        )
    }
}

export default Products
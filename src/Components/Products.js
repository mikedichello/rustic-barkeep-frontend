import React, {Component} from 'react';
import BuyButton from './BuyButton.js'

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
                        <div key={product.id}>
                            <h1>{product.Name} - ${product.Price}</h1>
                            <img src={`http://localhost:1337/${product.Image[0].url}`}/>
                            <BuyButton product={product} />
                        </div>
                    )
                })}
            </main>
        )
    }
}

export default Products
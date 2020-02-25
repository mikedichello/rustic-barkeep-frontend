import React, {Component} from 'react';
import {ReactComponent as Logo} from '../../src/RB.svg'



class Header extends Component {
    render(){
        return(
            <header>
                <Logo />
                <button className='snipcart-checkout'><i style={{color: "#ce8d47"}} className="fas fa-shopping-cart fa-3x"></i>(<span className="snipcart-items-count"></span>) <span className="snipcart-total-price"></span></button>
            </header>
        )
    }
}

export default Header;
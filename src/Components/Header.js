import React, {Component} from 'react';
import {ReactComponent as Logo} from '../../src/logo_rustic-barkeep.svg'
import {Row, Col } from 'reactstrap';
import SliderView from './Slider';


class Header extends Component {
    render(){
        return(
            <header className="container-fluid p-0">
                <Row className="align-items-start nav-overlay"> */}
                    <Col  className="col-lg-10 col-sm-8 col-xs-6">
                        <Logo fill="white" id="logo"/>
                    </Col>
                    <Col>
                        <button className='snipcart-checkout header-cart-btn'><i style={{color: "white"}} className="fas fa-shopping-cart butt"></i> (<span className="snipcart-items-count"></span>)  <span className="snipcart-total-price"></span></button>
                    </Col> 
                 </Row>
                <SliderView/>
            </header>
        )
    }
}

export default Header;
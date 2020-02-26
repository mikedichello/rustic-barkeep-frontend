import React, {Component} from 'react';
import {ReactComponent as Logo} from '../../src/RB.svg'
import { Button, Row, Col } from 'reactstrap';


class Header extends Component {
    render(){
        return(
            <header className="container-fluid no-gutters pb-5">
                <Row className="align-items-end">
                    <Col  className="col-lg-10 col-sm-8 col-xs-6">
                        <Logo />
                    </Col>
                    <Col>
                        <Button outline color="warning" className='snipcart-checkout'><i style={{color: "#ce8d47"}} className="fas fa-shopping-cart fa-3x"></i>(<span className="snipcart-items-count"></span>) <span className="snipcart-total-price"></span></Button>
                    </Col>
                </Row>
            </header>
        )
    }
}

export default Header;
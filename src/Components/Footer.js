import React, {Component} from 'react';
import {ReactComponent as FacebookLink} from '../../src/SVGs/icon_facebook-circle.svg'
import {ReactComponent as YoutubeLink} from '../../src/SVGs/icon_youtube-circle.svg'
import {ReactComponent as TwitterLink} from '../../src/SVGs/icon_twitter-circle.svg'
import {ReactComponent as InstagramLink} from '../../src/SVGs/icon_instagram-circle.svg'
import {ReactComponent as Visa} from '../../src/SVGs/icon_visa.svg'
import {ReactComponent as Discover} from '../../src/SVGs/icon_discover.svg'
import {ReactComponent as Mastercard} from '../../src/SVGs/icon_mastercard.svg'
import {ReactComponent as Amex} from '../../src/SVGs/icon_amex.svg'
import {ReactComponent as PayPal} from '../../src/SVGs/icon_paypal.svg'



class Footer extends Component {
    render() {
        return(
            <footer>
                <div className='social-links'>
                    <a href='#'><FacebookLink className='social-icon'/></a>
                    <a href='#'><YoutubeLink className='social-icon'/></a>
                    <a href='#'><TwitterLink className='social-icon'/></a>
                    <a href='#'><InstagramLink className='social-icon'/></a>
                </div>
                <nav className='footer-nav'>
                    <ul>
                        <li className='list-header'>SHOP</li>
                        <a href='#'><li>Glassware</li></a>
                        <a href='#'><li>Tumblers</li></a>
                        <a href='#'><li>Barware</li></a>
                    </ul>
                    <ul>
                        <li className='list-header'>LEARN</li>
                        <a href='#'><li>Our Story</li></a>
                        <a href='#'><li>Shipping & Returns</li></a>
                    </ul>
                    <ul>
                        <li className='list-header'>CONTACT</li>
                        <a href='#'><li>Contact Us</li></a>
                    </ul>
                </nav>
                <div className='payments'>
                    <Visa className='payment-icon'/>
                    <Mastercard className='payment-icon'/>
                    <Discover className='payment-icon'/>
                    <Amex className='payment-icon'/>
                    <PayPal className='payment-icon'/>
                </div>
                <h3 className='copywright'>© 2020 Rustic Barkeep</h3>
            </footer>
        )
    }
}

export default Footer
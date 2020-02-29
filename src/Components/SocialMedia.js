import React, {Component} from 'react';
import {ReactComponent as Shipping} from '../../src/SVGs/icon_shipping.svg'
import {ReactComponent as Quality} from '../../src/SVGs/icon_quality.svg'
import {ReactComponent as Durable} from '../../src/SVGs/icon_durable.svg'

class SocialMedia extends Component {
    render() {
        return(
            <>
                <div className="perk-container">
                    <div className="perk">
                        <Shipping className='perk-icon'/>
                        <h3 className='perk-text'>SHIPS FAST</h3>
                        <p className='perk-detail'>Orders ship within 2-3 business days</p>
                    </div>
                    <div className='perk'>
                        <Quality className='perk-icon' />
                        <h3 className='perk-text'>BEST QUALITY</h3>
                        <p className='perk-detail'>Hand-crafted artisan quality materials chosen by our in house product-designers</p>
                    </div>
                    <div className='perk'>
                        <Durable className='perk-icon'/>
                        <h3 className='perk-text'>DURABLE</h3>
                        <p className='perk-detail'>Most products include 1 year warranty</p>
                    </div>
                    </div>
                <div className='ig-container'>
                    <h1 className='ig-name'>@RUSTICBARKEEP</h1>
                    <div className='ig-img-container'>
                        <img className='ig-image' src='./images/image_insta-image-1.jpg'></img>
                        <img className='ig-image' src='./images/image_insta-image-2.jpg'></img>
                        <img className='ig-image' src='./images/image_insta-image-3.jpg'></img>
                        <img className='ig-image' src='./images/image_insta-image-4.jpg'></img>
                    </div>
                </div>
            </>        
        )
    }
}

export default SocialMedia;
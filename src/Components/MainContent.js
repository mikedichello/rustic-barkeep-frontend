import React, {Component} from 'react';


class MainContent extends Component {
    render() {
        return(
            <div className="mc-container">
                <div className="mc-row">
                    <div className="image-column">
                        <img className="content-image-one" src='./images/image_carousel-4.jpg' />
                    </div>                                           
                    <div className="mc-text-column">
                        <h1 className="title-text">Keeping it Rustic</h1>
                        <h2 className="main-text">Enjoying the classic with a modern twist</h2>
                        <p className="main-subtext">Setting trends while staying true to a rustic style</p>
                    </div> 
                </div>
                <div className='mc-row'>
                    <div className='mc-float-column'>
                        <img className="content-image-two" src="./images/image_carousel-3.jpg"></img>
                       
                        <h1 className="title-text article2">Who Is Rustic Barkeep</h1>
                        <h2 className="main-text">Passionate for the art of tending bar.</h2>
                        <p className="main-subtext">Whether a professional, or just entertaining at home, you will find your style here.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainContent;
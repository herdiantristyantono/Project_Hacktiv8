import React, { Component } from 'react';
import '../../App.css';
import star from '../../images/star.png';

class CardList extends Component {
    render(){
        return(
                <div id="carouselExampleIndicators" className="carousel slide container" data-ride="carousel" style={{width:"100%"}}>
                    <br />
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-caption d-none d-md-block">
                            <h1>COMING SOON!</h1>
                            <p>25 June 2019<img className="starImage" src={star} alt="star"/></p>        
                        </div>
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="http://s3-us-west-1.amazonaws.com/mediastinger/wp-content/uploads/2019/04/23010724/Aladdin-2019-after-credits-hq1.jpg" alt="First slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://cdn.vox-cdn.com/thumbor/y_zQVlSf3T9JXNsdTVZ-V1lDZCc=/0x227:1688x1688/1200x675/filters:focal(731x663:1001x933)/cdn.vox-cdn.com/uploads/chorus_image/image/60222205/InfinityWar5aabd55fed5fa.0.jpg" alt="Second slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://assets1.ignimgs.com/2019/05/14/godzilla-1557876259534_1280w.jpg" alt="Third slide"/>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
        );
    }
}

export default CardList;
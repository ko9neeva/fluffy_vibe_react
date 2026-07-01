import { cardWithVideo } from "./data/cardWithVideo"
import { cardsWithPhoto } from "./data/cardsWithPhoto"
import '../../css/homepage.css'

const ContentItem = () => { 
    return (
        <main className="main">  
            <div className = "row px-4 py-4 mx-0">
                <div className = {cardWithVideo.emptyColumn}> </div>
                <div className = {cardWithVideo.firstColumn}>
                    <h1 className="my-title lh-1">
                        {cardWithVideo.title}
                    </h1>
                    <p className ="my-text lead">
                        {cardWithVideo.text1}
                    </p>
                    <p className ="my-text lead">
                        {cardWithVideo.text2}
                    </p>
                </div>  

                <div className = {cardWithVideo.secondColumn}>  
                    <video autoPlay muted loop playsInline className="video-inst"> 
                        <source src={cardWithVideo.video} type="video/mp4" /> 
                    </video>    
                </div>
            </div>

            {cardsWithPhoto.map((cardData, index) => ( 
            <div className = "row px-4 py-4 mx-0" key={"card" + index}>
                <div className = {cardData.emptyColumn}> </div>
                <div className = {cardData.firstColumn}>
                    <h2 className="my-title lh-1">
                        {cardData.title}
                    </h2>
                    <p className ="my-text lead">
                        {cardData.text1}
                    </p>
                    <p className ="my-text lead">
                        {cardData.text2}
                    </p>
                </div>  

                <div className = {cardData.secondColumn}>  
                    <div id = {"carousel" + index} className="carousel slide">
                        <div className="carousel-indicators">
                            {cardData.imgs.map((img, i) => (
                            <button 
                                key={"carousel" + index + "button" + i}
                                type="button" 
                                data-bs-target={'#carousel'+ index} 
                                data-bs-slide-to={i} 
                                className={i === 0 ? "active" : ""} 
                                aria-current={i === 0 ? "true" : undefined} 
                                aria-label={`Slide ${i + 1}`}
                            >
                            </button>))}
                        </div>
                        <div className="carousel-inner">
                            {cardData.imgs.map((img, i) => (
                            <div key={"carousel" + index + "img" + i} className={i === 0 ? "carousel-item active" : "carousel-item"}>
                                <img 
                                    src={img}
                                    className="d-block w-100" 
                                    alt={cardData.alts[i]}
                                />
                            </div>))}
                        </div>

                        <button className="carousel-control-prev" type="button" data-bs-target={"#carousel" + index} data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target={"#carousel" + index} data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div> 
                </div>
            </div>))}
        </main>
    );
}

export default ContentItem;
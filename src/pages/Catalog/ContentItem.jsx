import { products } from "./../../data/products";
import { info } from "./data/info";
import '../../css/catalog.css'

const ContentItem = (props) => {
    const hoodies = props.hoodies;

    return (
        <main className="main">
            <div className="container-info row px-4 pt-4 pb-0 m-0"> 
                <div className="col-md-2"></div>
                {info.map(i => (
                <div key = {"info-" + i.title} className="col-md-4 text-center"> 
                    <img src={i.picture}  alt={i.alt} className="rounded-circle"/>
                    <h2 className="my-title lh-1">{i.title}</h2> 
                    <p className="my-text lead">{i.text}</p> 
                </div>))}
            </div> 
            
            {/* <hr className = "mt-0 mb-4 mx-5"></hr> */}
        
            <div className="product-cards px-4 pt-4 pb-4">
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3"> 
                        {products.map(product => (
                        <div key={"product"+ product.size} className="col"> 
                            <div className="product-card card"> 
                                <img src={product.picture} alt={"Pазмер " + product.size} />
                                <div className="card-body d-flex flex-column"> 
                                    <h3 className="my-title lh-1"> {product.title} </h3>
                                    <p className="my-text lead"> {product.text} </p> 
                                    
                                    <div className="d-flex justify-content-between align-items-end" style={{marginTop:'auto'}}>
                                        <button type="button" className="btn btn-lg btn-outline-secondary" onClick={() => props.addOrDelHoodie(product.size, 'add')}> 
                                            {hoodies[product.size].length == 0? "Выбрать" : "+"} 
                                        </button> 

                                        <span style={{alignSelf:'center'}} > 
                                            {hoodies[product.size].length == 0? "" : hoodies[product.size].length} 
                                        </span>

                                        <button type="button" className="btn btn-lg btn-outline-secondary" onClick={() => props.addOrDelHoodie(product.size, 'del')}
                                        style={{visibility: hoodies[product.size].length == 0? "hidden" : "visible"}}>
                                           - 
                                        </button> 

                                        <h2 className="my-title lh-1">{product.price} р.</h2> 
                                    </div>
                                </div> 
                            </div> 
                        </div>))}
                    </div> 
                </div>
            </div>      
        </main>
    );
}

export default ContentItem;
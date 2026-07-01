import { products } from "../../data/products";
import { colors } from "./data/colors";
import measurementsImg from "./pictures/measurements.webp"
import { measurements } from "./data/measurements";
import '../../css/basket.css'

const ContentItem = (props) => {
    const hoodies = props.hoodies;

    let hoodiesCount = Object.values(hoodies).reduce((acc, items) => acc + items.length, 0);
    let hoodiesPrice = Object.entries(hoodies).reduce((acc, [size, items]) =>  acc + (items.length * products.find(p => p.size === size).price), 0);
    let stripesPrice = Object.values(hoodies).reduce((acc, items) => acc + items.reduce((stripes, item) => stripes + parseInt('0'+ item.stripes), 0), 0) * 1000;

    return (
        <main className="main">
            <div className="row px-2 px-md-3 m-4">
                <div className="order-details col-12 col-md-6 col-lg-4"> 
                    <span>Количество товаров: {hoodiesCount} шт. </span>
                    <span>Стоимость худи: {hoodiesPrice} р. </span>
                    <span>Доплата за вышивку: {stripesPrice} р. </span> 
                    <hr className="m-0 p-0" style={{width: "215px"}}/>    
                    <span>Итого: {hoodiesPrice + stripesPrice} р. </span>   
                    
                    <button type="button" className="btn-buy btn btn-md btn-outline-secondary">Оформить</button>  
                              
                </div>
            </div>


            {products.map(product => ( 
                <div key={"table-" + product.size}>       
                    {hoodies[product.size].map(hoodie => (
                        <div key = {"hoodie-" + hoodie.id} className="product-data row">   
                            <div className = "title-container">
                                <p className="product-title my-auto"> Худи {product.size}</p>
                                <button className = "my-square btn-del btn btn-md btn-light p-0" onClick ={() => props.delHoodieById(product.size, hoodie.id)}>
                                    {"\u2715"}       
                                </button>
                            </div>   

                            <div className="my-1">
                                <img src = {product.picture} alt = {"Худи " + product.size} style={{maxWidth: "215px"}}/>  
                            </div>

                            <div className = "d-flex flex-wrap align-items-center">  
                                <select className ="form-select" style={{maxWidth: "185px"}} id = {hoodie.id + "-selector"} value = {hoodie.color} onChange = {(e) => props.changeColorById(product.size, hoodie.id, e.target.value)}>
                                    {Object.keys(colors).map(color => (
                                        <option key = {hoodie.id + "-option-" + color}> {color} </option>
                                    ))}
                                </select>
                                <div className ="color-demo my-square" style={{backgroundColor: colors[hoodie.color]}}> </div>
                            </div>  

                            <div className = "d-flex flex-wrap align-items-center">
                                <label style={{marginRight: "8px"}} htmlFor={hoodie.id+ "-input-stripes"}>Добавить дополнительно вышивку:</label>
                                <input className="input-data" id={hoodie.id+ "-input-stripes"} value = {hoodie.stripes} onChange = {(e) => {
                                    const newValue = e.target.value;
                                    if (/^[0-9]+$/.test(newValue) || newValue === ''){
                                        props.changeStripesById(product.size, hoodie.id, newValue);
                                    }}}> 
                                </input>  
                                <label style={{marginLeft: "8px"}} htmlFor={hoodie.id+ "-input-stripes"}>шт.</label> 
                            </div>
                            
                            <div className="mt-2 mt-md-1">
                                <p className = "product-price mb-0"> Цена: {product.price + parseInt('0'+hoodie.stripes) * 1000}  р. </p>
                            </div>
                        
                            {product.size =='OneSize' 
                                ? null 
                                : <div className = "container-measurements row mt-3"> 
                                    <div className = "col-12 col-lg-4 p-0">
                                        <div>
                                            <p> Снимите мерки с животного (размеры указывать в миллиметрах)</p>
                                        </div>
                                        <div> 
                                            <img className="instruction-measurements" src = {measurementsImg} alt = "Демонстрация мерок"/>
                                        </div>
                                    </div>
                                    
                                    <div className="col-12 col-lg-8">
                                    {measurements.map((measurement, indexM) => (
                                        <div key = {hoodie.id+ "-measurement-" + indexM} 
                                        className = "row"> 
                                            <div className = "col-md-9"> 
                                                <label htmlFor={hoodie.id+ "-input-measurement-" + indexM}>{measurement} </label>
                                            </div>
                                            <div className = "col-md-3"> 
                                                <input className = "input-data" id={hoodie.id+ "-input-measurement-" + indexM} value = {hoodie.measurements[indexM]} onChange = {(e) => {
                                                    const newValue = e.target.value;
                                                    if (/^[0-9]+$/.test(newValue) || newValue === '') {
                                                        let newValues = hoodie.measurements.map((oldValue, indexV) => indexV === indexM 
                                                            ? newValue
                                                            : oldValue);
                                                        props.changeMeasurementsById(product.size, hoodie.id, newValues);}}}>
                                                </input>
                                            </div>
                                        </div>
                                    ))}
                                    </div>
                                </div>
                            }               
                        </div>
                    ))}
                </div>  
            ))}

            {/* {products.map(product => ( 
                <div key={"table-" + product.size}>       
                    {hoodies[product.size].map(hoodie => (
                        <div key = {"hoodie-" + hoodie.id} className="product-data row p-2 p-md-3">
                            <div className = "col-12 col-md-7 d-flex flex-column">
                                Худи: {product.size}
                                <img src = {product.picture} alt = {"Худи " + product.size} style = {{width:"216px"}}/>
                            </div>

                            <div className = "col-12 col-md-7 d-flex flex-wrap align-items-center">
                                <select className ="form-select" id = {hoodie.id + "-selector"} value = {hoodie.color} onChange = {(e) => props.changeColorById(product.size, hoodie.id, e.target.value)}>
                                    {Object.keys(colors).map(color => (
                                        <option key = {hoodie.id + "-option-" + color}> {color} </option>
                                    ))}
                                </select>
                                <div className ="color-demo" style={{backgroundColor: colors[hoodie.color]}}> </div>
                            </div>
                            
                            {product.size =='OneSize' 
                                ? null
                                : <div className = "form-input row"> 
                                    <div className = "colLeft col-12 col-lg-4"> 
                                        <div className = "info-measurements">
                                            Снимите мерки с животного <br/> (размеры указывать в миллиметрах)
                                        </div>
                                        <img className="instruction-measurements" src = {measurementsImg} alt = "Демонстрация мерок"/>
                                    </div>
                                    <div className = "colRight col-12 col-lg-8"> 
                                        {measurements.map((measurement, indexM) => (
                                            <div key = {hoodie.id+ "-measurement-" + indexM} 
                                            className = "row"> 
                                                <div className = "col-md-9"> 
                                                    <label htmlFor={hoodie.id+ "-input-measurement-" + indexM}>{measurement} </label>
                                                </div>
                                                <div className = "col-md-3"> 
                                                    <input className = "input-measurement" id={hoodie.id+ "-input-measurement-" + indexM} value = {hoodie.measurements[indexM]} onChange = {(e) => {
                                                        const newValue = e.target.value;
                                                        if (/^[0-9]+$/.test(newValue) || newValue === '') {
                                                            let newValues = hoodie.measurements.map((oldValue, indexV) => indexV === indexM 
                                                                ? newValue
                                                                : oldValue);
                                                            props.changeMeasurementsById(product.size, hoodie.id, newValues);}}}>
                                                    </input>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            }

                            <div className = "row"> 
                                <div className = "col-12 col-md-7 d-flex flex-wrap align-items-center">                                    
                                    <label style={{marginRight: "8px"}} htmlFor={hoodie.id+ "-input-stripes"}>Дополнительная вышивка:</label>
                                    <input className="input-stripes" id={hoodie.id+ "-input-stripes"} value = {hoodie.stripes} onChange = {(e) => {
                                        const newValue = e.target.value;
                                        if (/^[0-9]+$/.test(newValue) || newValue === ''){
                                            props.changeStripesById(product.size, hoodie.id, newValue);
                                        }}}> 
                                    </input>          
                                </div>
                                <div className = "col-12 col-md-7">
                                    Цена: {product.price + parseInt('0'+hoodie.stripes) * 1000}  р.
                                </div>
                            </div>

                            <div className = "col-12 col-md-6">
                                <button className = "btn btn-md btn-outline-secondary" onClick ={() => props.delHoodieById(product.size, hoodie.id)}>
                                    Удалить           
                                </button>
                            </div>
                        </div>
                    ))}
                </div>  
            ))} */}
        </main>
    );
}

export default ContentItem;
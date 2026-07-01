import { Routes, Route } from "react-router-dom";
import HomePage from '../pages/HomePage/HomePage';
import Catalog from '../pages/Catalog/Catalog';
import Basket from '../pages/Basket/Basket';

function AppRoutes(props) {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route 
                path="/catalog" 
                element={ 
                    <Catalog 
                        hoodies = {props.hoodies}
                        addOrDelHoodie = {props.addOrDelHoodie}
                    />
                } 
            />
            <Route 
                path="/basket" 
                element={ 
                    <Basket                      
                        hoodies = {props.hoodies}
                        delHoodieById = {props.delHoodieById}
                        changeColorById = {props.changeColorById}
                        changeMeasurementsById = {props.changeMeasurementsById}
                        changeStripesById = {props.changeStripesById}
                    />
                } 
            />
        </Routes>
    );
}

export default AppRoutes;
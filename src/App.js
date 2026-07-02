import { HashRouter } from "react-router-dom";
import Navbar from './components/Navbar';
import { useHoodies} from './hooks/useHoodies'
import AppRoutes from './routes/AppRoutes'
import { products } from "./data/products";

function App() {
    const {
        hoodies,
        addOrDelHoodie,
        delHoodieById,
        changeColorById,
        changeMeasurementsById,
        changeStripesById,
    } = useHoodies(products);

    return (
        <HashRouter>
            <Navbar />
            <AppRoutes
                hoodies={hoodies}
                addOrDelHoodie={addOrDelHoodie}
                delHoodieById={delHoodieById}
                changeColorById={changeColorById}
                changeMeasurementsById={changeMeasurementsById}
                changeStripesById={changeStripesById}
            />
        </HashRouter>
    );
}

export default App;
import HeaderItem from "../../components/HeaderItem";
import FooterItem from "../../components/FooterItem";
import ContentItem from "./ContentItem";

const Basket = (props) => {
    return (
        <div className = "page-container">
            <HeaderItem/>
            <ContentItem 
                hoodies = {props.hoodies}
                delHoodieById = {props.delHoodieById}
                changeColorById = {props.changeColorById}
                changeMeasurementsById = {props.changeMeasurementsById}
                changeStripesById = {props.changeStripesById}
            />
            <FooterItem/>
        </div>
    );
}

export default Basket;
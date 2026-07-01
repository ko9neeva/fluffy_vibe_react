import HeaderItem from "../../components/HeaderItem";
import FooterItem from "../../components/FooterItem";
import ContentItem from "./ContentItem";

const Catalog = (props) => {
    return (
        <div className = "page-container">
            <HeaderItem/>
            <ContentItem
                hoodies = {props.hoodies}
                addOrDelHoodie = {props.addOrDelHoodie}
            />
            <FooterItem/>
        </div>
    );
}

export default Catalog;
import HeaderItem from "../../components/HeaderItem";
import ContentItem from "./ContentItem";
import FooterItem from "../../components/FooterItem";

const HomePage = () => {  
    return (
        <div className = "page-container">
            <HeaderItem/>           
            <ContentItem/>
            <FooterItem/>
        </div>
    );
}

export default HomePage;
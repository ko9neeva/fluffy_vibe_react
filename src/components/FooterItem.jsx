import '../css/footer.css'
import { InstagramIcon } from "./icons";
import { TelegramIcon } from "./icons";
import { test } from "./icons";

const FooterItem = () => {
    return (
        <footer className="footer"> 
            <ul>
                <li>
                    <a href="https://www.instagram.com/fluffy.vibe/" target="_blank" aria-label="Instagram">                      
                        {InstagramIcon()}
                    </a>
                </li>
                <li>
                    <a href="https://t.me/fluffy_vibe_store" target="_blank" aria-label="Telegram">
                        {TelegramIcon()}
                    </a>
                </li>
            </ul>
        </footer> 
    );
}

export default FooterItem;
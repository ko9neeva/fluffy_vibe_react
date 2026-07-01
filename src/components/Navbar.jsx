import { Link } from "react-router";

const Navbar = () => {
    const menuItems = [
        { id: 1, title: 'Главная', link: '/' },
        { id: 2, title: 'Каталог', link: '/catalog' },
        { id: 3, title: 'Корзина', link: '/basket' },
    ];
    return  <div className = "page-menu">
                <ul className="dropdown-menu dropdown-menu-center">
                    {menuItems.map(item => (
                        <li key = {"menuItem" + item.id}>
                            <Link className="dropdown-item" to={item.link}> {item.title} </Link>
                        </li>
                    ))}
                </ul>
            </div>
}

export default Navbar;
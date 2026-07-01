import Logo from "./pictures/fluffy_vibe_logo.webp"
import Navbar from "./Navbar"
import '../css/header.css'

const HeaderItem = () => {
    return (
        <header className="header">
            <nav className="navbar">
                <div className="row w-100 g-0 px-0">
                    <div className="d-none d-sm-block col-sm-3"></div>
                    <div className="logo-with-text col-12 col-sm-6">
                        <img src={Logo} className="main-logo" alt="Логотип" />
                        <h1 className="main-text mt-1 fw-light">FLUFFY VIBE</h1>
                    </div>  
                    <div className="d-flex justify-content-center pb-2 py-sm-4 col-12 col-sm-3">
                        <div className="dropdown m-auto">
                            <button className="btn-menu btn btn-outline-dark dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                Меню
                            </button>
                            <Navbar/>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default HeaderItem;
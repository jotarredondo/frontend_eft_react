function Navbar() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark nav-footer-bg">
            <div className="container">
                <a className="navbar-brand" href="#">
                    Gaming Store
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarGamingStore"
                    aria-controls="navbarGamingStore"
                    aria-expanded="false"
                    aria-label="Abrir navegación">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarGamingStore">
                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">
                            <a className="nav-link" href="#inicio">
                                Inicio
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#productos">
                                Productos
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#carrito">
                                Carrito
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#contacto">
                                Contacto
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
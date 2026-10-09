function Footer() {
    return (
        <footer className="nav-footer-bg text-white text-center py-4 mt-5">
            <div className="container">
                <p className="mb-2">© 2026 Gaming Store</p>
                <div className="d-flex flex-column align-items-center gap-2">
                    <a href="mailto:contacto@gamingstore.cl"
                        className="text-white text-decoration-none">contacto@gamingstore.cl</a>
                    <a href="https://www.instagram.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-white text-decoration-none">Instagram</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
import { useState, useEffect } from "react"
import ProductList from "./components/ProductList"
import Navbar from "./components/Navbar"
import Cart from "./components/Cart"
import Footer from "./components/Footer"
import Carousel from "./components/Carousel"
import "./App.css"

function App() {

    // estado productos
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState(false)
    // estado carrito
    const [carrito, setCarrito] = useState([])

    // Carga dinámicamente los productos desde el archivo JSON al iniciar la aplicación
    useEffect(() => {

        fetch(`${import.meta.env.BASE_URL}data/productos.json`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Error al cargar los productos")
                }
                return response.json()
            })
            .then(data => {
                setProductos(data)
                setCargando(false)
            })
            .catch(error => {
                console.error(error)
                setError(true)
                setCargando(false)
            })

    }, [])

// Agrega un producto al carrito
    function agregarAlCarrito(producto) {
        setCarrito(carritoActual => [...carritoActual, producto])
    }

// Elimina una unidad del carrito según su posición
    function eliminarDelCarrito(index) {
        const nuevoCarrito = carrito.filter(
            (producto, indice) => indice !== index
        )

        setCarrito(nuevoCarrito)
    }

    return (
        <>
            <header>
                <h1>Gaming Store</h1>
            </header>
            <Navbar />

            <Carousel />

            <main>{cargando ? (
                    <p className="mensaje">Cargando productos...</p>) : error ? (
                    <p className="mensaje error">No fue posible cargar los productos.</p>) : (
                <ProductList
                    productos={productos}
                    carrito={carrito}
                    agregarAlCarrito={agregarAlCarrito}/>
                )}

                <Cart carrito={carrito} eliminarDelCarrito={eliminarDelCarrito}/>
            </main>

            <Footer />
        </>
    )
}

export default App

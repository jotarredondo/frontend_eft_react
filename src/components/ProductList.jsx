import ProductCard from "./ProductCard"

function ProductList({ productos, carrito, agregarAlCarrito }) {

    return (
        <section id="productos" className="container my-5">

            <h2 className="text-center mb-4">
                Productos destacados
            </h2>

            <div className="row g-4">
                {productos.map(producto => (
                    <ProductCard
                        key={producto.id}
                        producto={producto}
                        carrito={carrito}
                        agregarAlCarrito={agregarAlCarrito}/>
                ))}
            </div>
        </section>
    )
}

export default ProductList
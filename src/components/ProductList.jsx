import ProductCard from "./ProductCard"

function ProductList({ productos, carrito, agregarAlCarrito }) {

    return (
        <section id="productos">
            <h2>Productos destacados</h2>

            <div className="product-list">
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
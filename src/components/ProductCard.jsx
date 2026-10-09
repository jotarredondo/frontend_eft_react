function ProductCard({ producto, carrito, agregarAlCarrito }) {

    const estaEnCarrito = carrito.some(
        item => item.id === producto.id
    )

    return (
        <div className="product-card">

            <img
                src={`${import.meta.env.BASE_URL}${producto.imagen}`}
                alt={producto.nombre}
                className="product-image"
            />

            <h3>{producto.nombre}</h3>

            <p>{producto.descripcion}</p>

            <p className="precio-normal">
                Precio normal: ${producto.precioNormal.toLocaleString("es-CL")}
            </p>

            <p className="precio-oferta">
                Oferta: ${producto.precioOferta.toLocaleString("es-CL")}
            </p>

            <button
                onClick={() => agregarAlCarrito(producto)}
                disabled={estaEnCarrito}>
                {estaEnCarrito ? "En el carrito" : "Agregar al carrito"}
            </button>

        </div>
    )
}

export default ProductCard
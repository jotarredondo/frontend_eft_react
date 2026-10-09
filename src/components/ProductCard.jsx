function ProductCard({ producto, carrito, agregarAlCarrito }) {

    // Comprueba si el producto ya está en el carrito
    const estaEnCarrito = carrito.some(
        item => item.id === producto.id
    )

    return (
        <div className="col-12 col-md-6 col-lg-4">

            <div className="card h-100 shadow-sm">

                <img
                    src={`${import.meta.env.BASE_URL}${producto.imagen}`}
                    alt={producto.nombre}
                    className="card-img-top product-image"/>

                <div className="card-body d-flex flex-column">

                    <h3 className="card-title h5">
                        {producto.nombre}
                    </h3>

                    <p className="card-text">
                        {producto.descripcion}
                    </p>

                    <p className="text-muted text-decoration-line-through mb-1">
                        Precio normal: $
                        {producto.precioNormal.toLocaleString("es-CL")}
                    </p>

                    <p className="fw-bold text-success fs-5">
                        Oferta: $
                        {producto.precioOferta.toLocaleString("es-CL")}
                    </p>

                    <button
                        className={
                            estaEnCarrito
                                ? "btn btn-secondary mt-auto"
                                : "btn btn-success mt-auto"
                        }
                        onClick={() => agregarAlCarrito(producto)}
                        disabled={estaEnCarrito}>
                        {estaEnCarrito ? "En el carrito" : "Agregar al carrito"}
                    </button>

                </div>
            </div>

        </div>
    )
}

export default ProductCard
function Cart({ carrito, eliminarDelCarrito }) {

    // Calcula el valor total de los productos agregados
    const total = carrito.reduce(
        (acumulador, producto) => acumulador + producto.precioOferta,
        0
    )

    return (
        <section id="carrito" className="container my-5">

            <h2 className="text-center mb-4">
                Carrito de compras
            </h2>

            <p className="text-center">
                Total de productos: {carrito.length}
            </p>

            {carrito.length === 0 ? (<div className="alert alert-info text-center">El carrito está vacío.</div>) : (

                <div className="card shadow-sm">

                    <div className="card-body">

                        {carrito.map((producto, index) => (

                            <div
                                className="row align-items-center border-bottom py-3"
                                key={`${producto.id}-${index}`}>

                                <div className="col-12 col-md-5">
                                    <strong>{producto.nombre}</strong>
                                </div>

                                <div className="col-6 col-md-4">
                                    ${producto.precioOferta.toLocaleString("es-CL")}
                                </div>

                                <div className="col-6 col-md-3 text-end">
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => eliminarDelCarrito(index)}>
                                        Eliminar
                                    </button>
                                </div>
                            </div>
                        ))}

                        <div className="text-end mt-4">
                            <h3 className="h5">
                                Total: ${total.toLocaleString("es-CL")}
                            </h3>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Cart
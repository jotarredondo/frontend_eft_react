function Cart({ carrito, eliminarDelCarrito }) {

    // Calcula el valor total de los productos agregados
    const total = carrito.reduce(
        (acumulador, producto) => acumulador + producto.precioOferta,
        0
    )

    return (
        <section id="carrito">
            <h2>Carrito de compras</h2>

            <p>Total de productos: {carrito.length}</p>

            {carrito.length === 0 ? (
                <p>El carrito está vacío.</p>) : (
                <>
                    <div className="cart-header">
                        <span>Producto</span>
                        <span>Precio</span>
                        <span>Acción</span>
                    </div>

                    {carrito.map((producto, index) => (
                        <div className="cart-item" key={`${producto.id}-${index}`}>
          <span className="cart-name">
            {producto.nombre}
          </span>
                            <span className="cart-price">
            ${producto.precioOferta.toLocaleString("es-CL")}
          </span>

                            <button onClick={() => eliminarDelCarrito(index)}>
                                Eliminar
                            </button>
                        </div>
                    ))}

                    <h3 className="cart-total">
                        Total: ${total.toLocaleString("es-CL")}
                    </h3>
                </>
            )}
        </section>
    )
}

export default Cart
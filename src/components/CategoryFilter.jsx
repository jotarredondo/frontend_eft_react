function CategoryFilter({ categoriaSeleccionada, setCategoriaSeleccionada }) {

    return (
        <section className="container my-4">
            <h2 className="text-center mb-3">Filtrar por categoría</h2>

            <div className="d-flex justify-content-center gap-2 flex-wrap">
                <button
                    className={
                        categoriaSeleccionada === "Todos"
                            ? "btn btn-success"
                            : "btn btn-outline-success"
                    }
                    onClick={() => setCategoriaSeleccionada("Todos")}>
                    Todos
                </button>

                <button
                    className={
                        categoriaSeleccionada === "Consolas"
                            ? "btn btn-success"
                            : "btn btn-outline-success"
                    }
                    onClick={() => setCategoriaSeleccionada("Consolas")}>
                    Consolas
                </button>

                <button
                    className={
                        categoriaSeleccionada === "Videojuegos"
                            ? "btn btn-success"
                            : "btn btn-outline-success"
                    }
                    onClick={() => setCategoriaSeleccionada("Videojuegos")}>
                    Videojuegos
                </button>
            </div>
        </section>
    )
}

export default CategoryFilter
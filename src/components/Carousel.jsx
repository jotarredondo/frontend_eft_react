import { useState } from "react"


function Carousel() {

    const imagenes = [
        {
            id: 1,
            src: `${import.meta.env.BASE_URL}img/ps5.jpg`,
            alt: "PlayStation 5"
        },
        {
            id: 2,
            src: `${import.meta.env.BASE_URL}img/xbox.jpg`,
            alt: "Xbox"
        },
        {
            id: 3,
            src: `${import.meta.env.BASE_URL}img/switch.jpg`,
            alt: "Nintendo Switch"
        }
    ]

    const [indiceActual, setIndiceActual] = useState(0)

    function imagenAnterior() {
        setIndiceActual(
            indiceActual === 0
                ? imagenes.length - 1
                : indiceActual - 1
        )
    }

    function imagenSiguiente() {
        setIndiceActual(
            indiceActual === imagenes.length - 1
                ? 0
                : indiceActual + 1
        )
    }

    return (
        <section className="gaming-carousel">
            <button
                className="carousel-btn"
                onClick={imagenAnterior}
            >
                ❮
            </button>

            <img
                src={imagenes[indiceActual].src}
                alt={imagenes[indiceActual].alt}
                className="carousel-image"
            />

            <button
                className="carousel-btn"
                onClick={imagenSiguiente}
            >
                ❯
            </button>
        </section>
    )
}

export default Carousel
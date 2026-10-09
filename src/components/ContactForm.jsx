import { useState } from "react"

function ContactForm() {

    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [mensaje, setMensaje] = useState("")

    const [error, setError] = useState("")
    const [enviado, setEnviado] = useState(false)

    function manejarEnvio(event) {
        event.preventDefault()

        if (nombre.trim() === "" || email.trim() === "" || mensaje.trim() === "") {
            setError("Por favor, completa todos los campos.")
            setEnviado(false)
            return
        }

        if (!email.includes("@")) {
            setError("Ingresa un correo electrónico válido.")
            setEnviado(false)
            return
        }

        setError("")
        setEnviado(true)

        setNombre("")
        setEmail("")
        setMensaje("")
    }

    return (
        <section id="contacto" className="container my-5">
            <h2 className="text-center mb-4">Contacto</h2>

            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6">

                    <form
                        className="card p-4 shadow-sm"
                        onSubmit={manejarEnvio}>

                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">
                                Nombre
                            </label>

                            <input
                                type="text"
                                id="nombre"
                                className="form-control"
                                value={nombre}
                                onChange={(event) => setNombre(event.target.value)}/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email
                            </label>

                            <input
                                type="email"
                                id="email"
                                className="form-control"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="mensaje" className="form-label">
                                Mensaje
                            </label>

                            <textarea
                                id="mensaje"
                                className="form-control"
                                rows="4"
                                value={mensaje}
                                onChange={(event) => setMensaje(event.target.value)}/>
                        </div>

                        {error && (
                            <div className="alert alert-danger">
                                {error}
                            </div>
                        )}

                        {enviado && (
                            <div className="alert alert-success">
                                Mensaje enviado correctamente.
                            </div>
                        )}

                        <button
                            type="submit"
                            className="btn btn-success">
                            Enviar
                        </button>

                    </form>

                </div>
            </div>
        </section>
    )
}

export default ContactForm
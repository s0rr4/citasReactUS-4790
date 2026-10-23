import "../css/paciente.css"

const Paciente = ({ paciente, eliminarPaciente, editarPaciente }) => {
    const handleEditar = () => {
        editarPaciente(paciente.id)
    }

    const handleEliminar = () => {
        eliminarPaciente(paciente.id)
    }

    return (
        <article className="paciente-card">
            <p className="paciente-label">
                <span className="paciente-nombre">{paciente.paciente}</span>
            </p>
            <div className="paciente-contenedor-botones">
                <button
                    className="paciente-btn paciente-btn-eliminar"
                    onClick={() => handleEliminar()}
                >
                    Eliminar
                </button>
                <button className="paciente-btn paciente-btn-editar" onClick={handleEditar}>Editar</button>
            </div>
            <p>Propietario: {paciente.nombrePropietario}</p>
            <p>Correo: {paciente.correo}</p>
            <p>Telefono: {paciente.telefono}</p>
            <p>Fecha Alta: {paciente.fechaAlta}</p>
            <p>Sintomas: {paciente.sintomas}</p>
        </article>
    )
}

export default Paciente;
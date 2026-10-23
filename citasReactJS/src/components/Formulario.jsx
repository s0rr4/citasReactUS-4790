// Formulaio
import { useEffect, useState } from 'react'
import '../css/formulario.css'

const Formulario = ({
  modalVisible, setModalVisible, pacientes, setPacientes, pacienteEditado, setPacienteEditado
}) => {
  const [paciente, setPaciente] = useState('')
  const [nombrePropietario, setNombrePropietario] = useState('')
  const [correo, setCorreo] = useState('')
  const [telefono, setTelefono] = useState('')
  const [fechaAlta, setFechaAlta] = useState('')
  const [sintomas, setSintomas] = useState('')

  const resetFormulario = () => {
    setPaciente('')
    setNombrePropietario('')
    setCorreo('')
    setTelefono('')
    setFechaAlta('')
    setSintomas('')
  }

  useEffect(() => {
    if (Object.keys(pacienteEditado || {}).length > 0) {
      setPaciente(pacienteEditado.paciente || '')
      setNombrePropietario(pacienteEditado.nombrePropietario || '')
      setCorreo(pacienteEditado.correo || '')
      setTelefono(pacienteEditado.telefono || '')
      setFechaAlta(pacienteEditado.fechaAlta || '')
      setSintomas(pacienteEditado.sintomas || '')
    } else {
      resetFormulario()
    }
  }, [pacienteEditado, modalVisible])

  const handleCancelar = () => {
    resetFormulario();
    setModalVisible(false);
    setPacienteEditado({})
  }

  const handleCita = (e) => {
    e.preventDefault()
    // Validation
    if ([paciente.trim(), nombrePropietario.trim(), correo.trim(), telefono.trim(), fechaAlta, sintomas.trim()].includes('')) {
      window.alert('Todos los campos son obligatorios')
      return
    }
    console.log("Todos los campos estan llenos")

    // Create an object with all values in the form
    const datosPaciente = {
      paciente,
      nombrePropietario,
      correo,
      telefono,
      fechaAlta,
      sintomas
    }
    if (Object.keys(pacienteEditado || {}).length > 0) {
      setPacientes(pacientes.map((pacienteActual) =>
        pacienteActual.id === pacienteEditado.id
          ? { ...pacienteEditado, ...datosPaciente }
          : pacienteActual
      ))
    } else {
      setPacientes([...pacientes, { ...datosPaciente, id: Date.now() }])
    }
    resetFormulario()
    setModalVisible(false)
    setPacienteEditado({})
  }

  return (
    <div className="forumulario-contenido">
        <h2 className="formulario-titulo">{pacienteEditado ? 'Editar' : 'Nueva'}
          <span className="formulario-titulo-bold"> Cita</span>
        </h2>
        <p className="formulario-descripcion">Complete el formulario para agendar una nueva cita</p>
        <button className='formulario-btn-cancelar' onClick={() => handleCancelar()}>
          <span className="formulario-btn-texto-cancelar">X Cancelar</span>
        </button>
        <form onSubmit={handleCita} className="formulario">
          <div className="formulario-campo">
            <label className="formulario-label" htmlFor="nombrePaciente">Nombre Paciente</label>
            <input
              id="nombrePaciente"
              type="text"
              className="formulario-input"
              placeholder="Juanito Perez"
              value={paciente}
              onChange={(e) => setPaciente(e.target.value)}
            />
          </div>
          <div className="formulario-campo">
            <label className="formulario-label" htmlFor="nombrePropietario">Nombre Propietario</label>
            <input
              id="nombrePropietario"
              type="text"
              className="formulario-input"
              placeholder="Meritxell Shepherd Cruz"
              value={nombrePropietario}
              onChange={(e) => setNombrePropietario(e.target.value)}
            />
          </div>
          <div className="formulario-campo">
            <label className="formulario-label" htmlFor="correo">Correo</label>
            <input
              id="correo"
              type="email"
              className="formulario-input"
              placeholder="meri@gmail.com"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
          </div>
          <div className="formulario-campo">
            <label className="formulario-label" htmlFor="telefono">Telefono</label>
            <input
              id="telefono"
              type="tel"
              className="formulario-input"
              placeholder="4492786537"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
          </div>
          <div className="formulario-campo">
            <label className="formulario-label" htmlFor="fechaAlta">Fecha Alta</label>
            <input
              id="fechaAlta"
              type="date"
              className="formulario-input"
              value={fechaAlta}
              onChange={(e) => setFechaAlta(e.target.value)}
            />
          </div>
          <div className="formulario-campo">
            <label className="formulario-label" htmlFor="sintomas">Sintomas</label>
            <textarea
              id="sintomas"
              className="formulario-input"
              placeholder="Describe los sintomas"
              value={sintomas}
              onChange={(e) => setSintomas(e.target.value)}
              rows={4}
            />
          </div>
          <button type="submit" className="formulario-btn-submit">
            {pacienteEditado ? 'Editar Paciente' : 'Agregar Paciente'}
          </button>
        </form>
    </div>
  )
}

export default Formulario
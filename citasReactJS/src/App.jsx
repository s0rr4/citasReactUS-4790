import { useState } from 'react'
import './css/main.css'
import Formulario from './components/Formulario.jsx'
import Paciente from './components/Paciente.jsx'

function App() {
  const [pacientes, setPacientes] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [pacienteEditado, setPacienteEditado] = useState(null)
  const editarPaciente = (id) => {
    const pacienteSeleccionado = pacientes.filter((paciente) => paciente.id === id)

    setPacienteEditado(pacienteSeleccionado[0])
    setModalVisible(true)
  }
  const eliminarPaciente = (id) => {
    const confirmar=window.confirm("Deseas eliminar el paciente?");
    console.log(confirmar);
    if (confirmar){
      const pacienteActualizado= pacientes.filter(paciente => paciente.id !== id)
      setPacientes(pacienteActualizado)
    }
  }
  return (
    <main className="container">
      <h1>Administrador de Citas <span className="titulo-bold">Veterinario</span></h1>
      <button 
      className="btnNuevaCita"
      onClick={()=> {
        console.log(pacientes)
        setPacienteEditado(null)
        setModalVisible(true)
      }}>
        <span className="btnTextoNuevaCita">Nueva Cita</span>
      </button>

      <section className="listado">
        {pacientes.length === 0 ? (
          <p className="noPacientes">No hay citas registradas</p>
        ) : (
          pacientes.map((paciente) => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              eliminarPaciente={eliminarPaciente}
              editarPaciente={editarPaciente}
            />
          ))
        )}
      </section>
      {modalVisible && (
        <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <div className="modal-content">
            <Formulario modalVisible={modalVisible} setModalVisible={setModalVisible} 
            pacientes={pacientes} setPacientes={setPacientes}
            pacienteEditado={pacienteEditado}
            setPacienteEditado={setPacienteEditado} />
            <button type="button" onClick={() => {
              setModalVisible(false)
              setPacienteEditado(null)
            }}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </main>
  )
}

export default App

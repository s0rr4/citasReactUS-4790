import { useState } from 'react'
import './css/main.css'
import Formulario from './components/Formulario.jsx'

function App() {
  const [initialState, setState] = useState("Hola Mundo")
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <main className="container">
      <h1>Administrador de Citas <span className="titulo-bold">Veterinario</span></h1>
      <button 
      className="btnNuevaCita"
      onClick={()=> {
        console.log(initialState) 
        setState('Hiciste click')
        setModalVisible(true)
      }}>
        <span className="btnTextoNuevaCita">Nueva Cita</span>
      </button>
      {modalVisible && (
        <div className="modelOverlay" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <div className="modelContainer">
            <Formulario />
            <button type="button" onClick={() => setModalVisible(false)}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </main>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import imagenInicio from './assets/imagen_inicio.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='intro'>
      <div className="text-content">
        <h1>Frontend<br></br>
          Developer</h1>

          <p className='txtInicio'> ¡Hola! Soy Liberty, y mi pasión es crear proyectos frontend con gran experiencia de usuario.</p>
      </div>
          
          <img className='imagenInicio' src={imagenInicio}/>
      </div>

      <div className='conoceme'>
        <h3>Conóceme</h3>

          <p>Con un poco de comunicación y pasión, un esfuerzo se convierte en un gran logro</p>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

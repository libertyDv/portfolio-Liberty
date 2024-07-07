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

        <img className='imagenInicio' src={imagenInicio} />
      </div>

      <div className='conoceme'>
        <h2 className='titCon'>Conóceme</h2>
        <p className='titTxt'>Con un poco de comunicación y pasión, un esfuerzo se<br></br> convierte en un gran logro</p>
      </div>



    </>
  )
}

export default App

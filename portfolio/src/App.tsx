import imagenInicio from './assets/imagen_inicio.png'
import circulo from './assets/circulo.png'

import './App.css'

function App() {

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



      <div className='sobreMi'>
      <img className='imagenCirc' src={circulo} />
      <div className='sobreMiCont'>
      <h2 className='titSobreMi'>Sobre mí</h2>
      <p className='textSobreMi'>Me considero una persona apasionada por la programación y todo lo que la rodea, una de mis metas siendo mejorar en esta. <br></br><br></br>
        Además, soy creativa y curiosa, siempre buscando desafíos que me permitan crecer tanto a nivel profesional como presional.<br></br><br></br>
         ¿Qué tal si hablamos de proyectos?
      </p>
      </div>
      </div>



    </>
  )
}

export default App;
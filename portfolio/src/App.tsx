import imagenInicio from './assets/imagen_inicio.png'
import circulo from './assets/circulo.png'
import reactIcono from './assets/react_ic.png'
import java from './assets/java.png'
import js from './assets/js.png'
import html from './assets/html.png'
import css from './assets/css.png'
import figma from './assets/figma.png'
import wordpress from './assets/wordpress.png'
import gith from './assets/gith.png'
import git from './assets/git.png'


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

      <div className='stack'>

      <h2 className='titStack'>Stack</h2>
        <div className='parteUno'>

          <p className='txtUno'>Estas son las skills donde tengo más experiencia, pero actualmente las sigo reforzando y aprendiendo nuevas para así ampliar mis conocimientos. Aunque no esté relacionado con la parte de frontend, tengo experiencia usando Kotlin para desarrollar aplicaciones para Android.</p>
          <div className='iconos'>
          <img className='reactI' src={reactIcono} />
          <img className='javaI' src={java} />
          <img className='jsI' src={js} />
          <img className='htmlI' src={html} />
          <img className='cssI' src={css} />
          </div>
        </div>

        <div className='parteDos'>

          <p className='txtDos'>También tengo experiencia usando las siguientes herramientas y plataformas, las cuales me han ayudado a la hora de realizar algun proyecto.</p>
          <div className='iconos2'>

          <img className='figmaI' src={figma} />
          <img className='wordpressI' src={wordpress} />
          <img className='githI' src={gith} />
          <img className='gitI' src={git} />
          </div>
        </div>
      </div>

      <div className='proyectos'>
      <h2 className='titProyectos'>Proyectos</h2>

      </div>


    </>

  )
}

export default App;
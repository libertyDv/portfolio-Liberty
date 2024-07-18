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
import fairy from './assets/fairy.png'
import schedule from './assets/schedule.png'
import bookie from './assets/bookiw.png'
import taza from './assets/taza.png'
import inicio from './assets/iniciop.png'
import Header from './header';
import Footer from './footer'
import './App.css'
import React, { useState, useEffect } from 'react';




function App() {

  const [telefonoVisible, setTelefonoVisible] = useState(false);
  const [mensaje1Visible, setMensaje1Visible] = useState(false);
  const [mensaje2Visible, setMensaje2Visible] = useState(false);

  const handleOpcion1Click = () => {
    setMensaje1Visible(true); // Mostrar mensaje 1
    setMensaje2Visible(false); // Ocultar mensaje 2 si estaba visible
  };

  const handleOpcion2Click = () => {
    setMensaje1Visible(false); // Ocultar mensaje 1 si estaba visible
    setMensaje2Visible(true); // Mostrar mensaje 2
  };

  const handleClick = () => {
    setTelefonoVisible(true);
  };

  const handleCloseClick = () => {
    setTelefonoVisible(false);
  };

  return (
    <>
      <Header />

      <section id='inicio'>
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
      </section>

    <section id='sobremi'>
      <div className='sobreMi'>
        <img className='imagenCirc' src={inicio} />
        <div className='sobreMiCont'>
          <h2 className='titSobreMi'>Sobre mí</h2>
          <p className='textSobreMi'>Me considero una persona apasionada por la programación y todo lo que la rodea, una de mis metas siendo mejorar en esta. <br></br><br></br>
            Además, soy creativa y curiosa, siempre buscando desafíos que me permitan crecer tanto a nivel profesional como presional.<br></br><br></br>
            ¿Qué tal si hablamos de proyectos?
          </p>
          <button onClick={handleClick} className="btnContacto">Enviar mensaje</button>
        </div>
      </div>
      </section>

      <section id='stack'>
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
      </section>

      <section id='proyectos'>
      <div className='proyectos'>
        <h2 className='titProyectos'>Proyectos</h2>

        <div className='proy1'>

          <img className='fairy' src={fairy} />
          <h3 className='hproy1'>Web Fairy Dollhouse</h3>

        </div>


        <div className='proy2'>

        <a className='schedule' href="https://github.com/libertyDv/toDoList-React" target="_blank" >
          <img className='schedule' src={schedule} />
          </a>
        </div>
        <div className='txtsProy2'>
          <h3 className='hproy2'>Schedule Web</h3>
        </div>
      </div>

      <div className='proy3'>
      <a href="https://github.com/Bookie-App/Android" target="_blank">
        <img className='bookie' src={bookie} />
        </a>
      </div>
      <div className='txtsProy3'>
        <h3 className='hproy3'>Bookie App</h3>
      </div>

</section>

<section id='contacto'>
      <div className='contacto'>
        <img className='taza' src={taza} />

        <h2 className='titContacto'>Contacto</h2>
        <p className='txtContacto'>¿Qué tal si le mandas un mensaje a mi bot y nos ponemos en contacto para hablar de grandes ideas? ¡No te olvides del café! O té, lo que más de guste.</p>
        <button onClick={handleClick} className="btnContacto">Enviar mensaje</button>
      </div>

      {telefonoVisible && (
        <div className='containerTelefono'>
          <div className='tel'>
            <button id='cerrarTel' onClick={handleCloseClick} className='btnCerrar'>X</button>
            <div id='telScreen'></div>
            <div id='telScreen'></div>
            <div className='perfil'>
              <img className='fotBot' src={java} alt="Java" />
              <p className='bot'>Libby bot</p>
            </div>
            <div id='conver' className='conver'>
              <div className='mensaje'>
                <p className='bienvBot'>¡Bienvenido a mi bot y gracias por pasarte por mi portfolio! ¿En qué puedo ayudarte?</p>
              </div>
              <div className='opcion1' onClick={handleOpcion1Click}>
                <p className='textop'>¡Quiero contratarte!</p>
              </div>
              <div className='opcion2' onClick={handleOpcion2Click} >
                <p className='textop2'>Solo pasaba a echar un vistazo</p>
              </div>
              <div className='mensaje1' style={{ display: mensaje1Visible ? 'block' : 'none' }}>
                <p className='p2'>¡Me alegro de oír eso! Aquí te dejo mi correo<br></br>
                  <a href='mailto:liberty@libertyltm.com' className='correo'>liberty@libertyltm.com</a><br></br>
                  ¡Nos vemos pronto!</p>
              </div>
              <div className='mensaje2' style={{ display: mensaje2Visible ? 'block' : 'none' }}>
                                <p className='p3'>¡Espero que te haya gustado! Gracias por pasarte.</p>
              </div>
            </div>
          </div>
        </div>
      )}

</section>

<Footer />


    </>

  )
}

export default App;
import imagenInicio from './assets/imagen_inicio.png'
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
import faeMood from './assets/faeMood.png'
import bookie from './assets/bookiw.png'
import taza from './assets/taza.png'
import inicio from './assets/iniciop.png'
import beans from './assets/beans.png'
import Header from './header';
import Footer from './footer'

import './App.css'
import { useState } from 'react';
import { Helmet } from "react-helmet";  
import logo from './assets/lt.png';
import { useTranslation } from 'react-i18next';




function App() {

  const { t } = useTranslation();
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

      <Helmet>
        <title>Liberty</title> 
        <meta name="description" content="Portfolio" />
      </Helmet>
     
      <Header />

      <div className="language-selector">
        <button onClick={() => changeLanguage('es')}>Español</button>
        <button onClick={() => changeLanguage('en')}>English</button>
      </div>

      <section id='inicio'>
        <div className='intro'>
          <div className="text-content">
            <h1 className='h1F'>Frontend<br></br>
              Developer</h1>

            <p className='txtInicio'> {t('hola')}</p>
          </div>

          <img className='imagenInicio' src={imagenInicio} />
        </div>

        <div className='conoceme'>
          <h2 className='titCon'>{t('conoceme')}</h2>
          <p className='titTxt'>{t('conoceme_text')}</p>
        </div>
      </section>

      <section id='sobremi'>
        <div className='sobreMi'>
          <img className='imagenCirc' src={inicio} />
          <div className='sobreMiCont'>
            <h2 className='titSobreMi'>{t('sobre_mi')}</h2>
            <p className='textSobreMi'>{t('sobre_mi_texto')}
            </p>
            <button onClick={handleClick} className="btnContacto">{t('btn_sonbremi')}</button>
          </div>
        </div>
      </section>

      <section id='stack'>
        <div className='stack'>

          <h2 className='titStack'>Stack</h2>
          <div className='parteUno'>

            <p className='txtUno'>{t('stack')}</p>
            <div className='iconos'>
              <img className='reactI' src={reactIcono} />
              <img className='javaI' src={java} />
              <img className='jsI' src={js} />
              <img className='htmlI' src={html} />
              <img className='cssI' src={css} />
            </div>
          </div>
          <div className='parteDos'>

            <p className='txtDos'>{t('stack2')}</p>
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
          <h2 className='titProyectos'>{t('proyectos')}</h2>

          <div className='proy1'>


            <img className='fairy' src={fairy} />
            <div className='txtsProy3'>
              <h3 className='hproy1'>Web Fairy Dollhouse</h3>
            </div>
          </div>


          <div className='proy2'>

            <a className='schedule' href="https://github.com/libertyDv/faeMood" target="_blank" rel="noopener noreferrer">
              <img className='schedule' src={faeMood} />
            </a>
          </div>
          <div className='txtsProy2'>
            <h3 className='hproy2'>FaeMood</h3>
          </div>
        </div>

        <div className='proy3'>
          <a href="https://github.com/Bookie-App/Android" target="_blank" rel="noopener noreferrer">
            <img className='bookie' src={bookie} />
          </a>
        </div>
        <div className='txtsProy3'>
          <h3 className='hproy3'>Bookie App</h3>
        </div>

        <div className='proy2'>

            <a className='schedule' href="https://github.com/libertyDv/beans-api" target="_blank" rel="noopener noreferrer">
              <img className='schedule' src={beans} />
            </a>
          </div>
          <div className='txtsProy2'>
            <h3 className='hproy2'>Beans</h3>
          </div>

        

      </section>

      <section id='contacto'>
        <div className='contacto'>
          <img className='taza' src={taza} />

          <h2 className='titContacto'>{t('contacto')}</h2>
          <p className='txtContacto'>{t('contacto_texto')}</p>
          <button onClick={handleClick} className="btnContacto">{t('btn_sonbremi')}</button>
        </div>

        {telefonoVisible && (
          <div className='containerTelefono'>
            <div className='tel'>
              <button id='cerrarTel' onClick={handleCloseClick} className='btnCerrar'>X</button>
              <div id='telScreen'></div>
              <div id='telScreen'></div>
              <div className='perfil'>
                <img className='fotBot' src={logo} alt="Java" />
                <p className='bot'>Libby bot</p>
              </div>
              <div id='conver' className='conver'>
                <div className='mensaje'>
                  <p className='bienvBot'>{t('bot_bienvenida')}</p>
                </div>
                <div className='opcion1' onClick={handleOpcion1Click}>
                  <p className='textop'>{t('quiero_contratarte')}</p>
                </div>
                <div className='opcion2' onClick={handleOpcion2Click} >
                  <p className='textop2'>{t('solo_vistazo')}</p>
                </div>
                <div className='mensaje1' style={{ display: mensaje1Visible ? 'block' : 'none' }}>
                <p className='p2' dangerouslySetInnerHTML={{ __html: t('contratarte') }}></p>
                  
                </div>
                <div className='mensaje2' style={{ display: mensaje2Visible ? 'block' : 'none' }}>
                  <p className='p3'>{t('gustado')}</p>
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
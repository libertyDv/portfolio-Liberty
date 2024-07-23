import linke from './assets/lin.png'
import git from './assets/gi.png'
import cv from './assets/cv.png'
import './footer.css';

import { Link as ScrollLink } from 'react-scroll';

function Footer() {
    return (
        <footer className="footer">
            <div className='containerFooter'>
                <div className='fot'>
                    <p className='pFt'>
                        ❝La creatividad es la inteligencia divirtiéndose.❞
                    </p>
                    <div className='foot'>


                        <a><ScrollLink to="inicio" smooth={true} duration={500} id="ftl" className="nav-link" >Inicio</ScrollLink></a><br></br>
                        <a><ScrollLink to="sobremi" id="ftl" className="nav-link" smooth={true} duration={500}>Sobre mí</ScrollLink></a><br></br>
                        <a><ScrollLink to="stack" id="ftl2" className="nav-link" smooth={true} duration={500}>Stack</ScrollLink></a><br></br>
                        <a><ScrollLink to="proyectos" id="ftl3" className="nav-link" smooth={true} duration={500}>Proyectos</ScrollLink></a><br></br>
                        <a><ScrollLink to="contacto" id="ftl4" className="nav-link" smooth={true} duration={500}>Contacto</ScrollLink></a><br></br>
                    </div>

                    <div className='imgs-footer'>
                        <a className='linke' href="https://www.linkedin.com/in/liberty-tamayo-05b086252/" target="_blank" >
                            <img className='linke' src={linke} />
                        </a>

                        <a className='git' href="https://github.com/libertyDv" target="_blank" >
                            <img className='git' src={git} />
                        </a>

                        <a className='cv' href="https://github.com/libertyDv" target="_blank" >
                            <img className='cv' src={cv} />
                        </a>
                    
                    </div>
                    <a href="mailto:liberty@libertyltm.com" className="correo">liberty@libertyltm.com</a>
                    <p>Liberty Tamayo Martínez ©</p>
                </div>
            </div>

        </footer>
    );
}

export default Footer;


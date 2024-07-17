import React from 'react';
import './footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className='containerFooter'>
                <div className='fot'>
                    <p className='pFt'>
                    ❝La creatividad es la inteligencia divirtiéndose.❞
                    </p>
                    <div className='foot'>
                    <a id="ftl" className="nav-link" href="#sobremi">Sobre Mi</a><br></br>
                    <a id="ftl2" className="nav-link" href="#skills">Skills</a><br></br>
                    <a id="ftl3" className="nav-link" href="#proyectos">Proyectos</a><br></br>
                    <a id="ftl4" className="nav-link" href="#contacto">Contacto</a><br></br>
                    </div>

                    <div className='imgs-footer'>
                        <a href='https://www.linkedin.com/in/liberty-tamayo-05b086252/' target='_blank'></a>
                        <a href='https://github.com/libertyDv' target='_blank'></a>
                    </div>
                    <a href="mailto:liberty@libertyltm.com" className="correo">liberty@libertyltm.com</a>
                    <p>Liberty Tamayo Martínez ©</p>
                </div>
            </div>
           
        </footer>
    );
}

export default Footer;


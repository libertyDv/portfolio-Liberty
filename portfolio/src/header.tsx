import React from 'react';
import './header.css';
import logo from './assets/logo.png'
import { Link as ScrollLink } from 'react-scroll';


function Header() {
    return (
        <header className="header">
            <img className='logo' src={logo} />
            <nav>
                <ul>
                    <li><ScrollLink to="inicio" smooth={true} duration={500}>Inicio</ScrollLink></li>
                    <li><ScrollLink to="sobremi" smooth={true} duration={500}>Sobre mí</ScrollLink></li>
                    <li><ScrollLink to="stack" smooth={true} duration={500}>Stack</ScrollLink></li>
                    <li><ScrollLink to="proyectos" smooth={true} duration={500}>Proyectos</ScrollLink></li>
                    <li><ScrollLink to="contacto" smooth={true} duration={500}>Contacto</ScrollLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;


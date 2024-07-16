import React from 'react';
import './header.css';

function Header() {
    return (
        <header className="header">
            <img src="logo.png" alt="Company Logo" className="logo" />
            <nav>
                <ul>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/about">Sobre mí</a></li>
                    <li><a href="/services">Stack</a></li>
                    <li><a href="/contact">Proyectos</a></li>
                    <li><a href="/contact">Contacto</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;


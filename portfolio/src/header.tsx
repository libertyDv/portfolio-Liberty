import { useState } from 'react';
import './header.css';
import logo from './assets/logo.png';
import { Link as ScrollLink } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import i18n from './i18n';
import eng from './assets/eng.png'
import esp from './assets/esp.png'




function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const { t } = useTranslation();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <header className="header">
            <img className='logo' src={logo} alt="Logo" />
            <button className="menu-toggle" onClick={toggleMenu}>
                ☰
            </button>
            <nav className={menuOpen ? 'open' : ''}>
                <ul>
                    <li><ScrollLink to="inicio" smooth={true} duration={500}>{t('label_inicio')}</ScrollLink></li>
                    <li><ScrollLink to="sobremi" smooth={true} duration={500}>{t('sobre_mi')}</ScrollLink></li>
                    <li><ScrollLink to="stack" smooth={true} duration={500}>{t('contacto')}</ScrollLink></li>
                    <li><ScrollLink to="proyectos" smooth={true} duration={500}>{t('proyectos')}</ScrollLink></li>
                    <li><ScrollLink to="contacto" smooth={true} duration={500} className="cont">{t('contacto')}</ScrollLink></li>

                    <div className="languageSelector">
                        <img 
                        src={esp} 
                        alt="English" 
                        className="languageIcon" 
                        width='25px'
                        onClick={() => changeLanguage('es')} 
                    />
                        <img 
                        src={eng} 
                        alt="Englishg" 
                        className="languageIcon" 
                        width='25px'
                        onClick={() => changeLanguage('en')} 
                    />
                    </div>
                   
                </ul>
            
            </nav>

            
        </header>
    );
}

export default Header;

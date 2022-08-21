import React from 'react';

// import svg
import logo from '../svg/logo1.svg';

const Nav = () => {
    return (
        <nav className='navbar'>
            <img src={logo} alt="logo" className='logo'/>
            <input type="checkbox" id='toggler'/>
            <label htmlFor="toggler"><i className="fa-solid fa-bars"></i></label>
            <div className="menu">
                <ul className="list">
                    <li><a href="#goto-home">Home</a></li>
                    <li><a href="#goto-aboutme">Sobre mí</a></li>
                    <li><a href="#goto-abilities">Mis habilidades</a></li>
                    <li><a href="#goto-projects">Proyectos</a></li>
                    <li><a href="#goto-contact">Contacto</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
import React from 'react';

// import cv
import cv from '../cv-abd.pdf';

const Footer = () => {
    return (
        <footer>
            <div className="items-contact">
                <a href="https://www.linkedin.com/in/axelbriandip/" target='_blank'>
                    <i className="fa-brands fa-linkedin"></i>
                    <span id='tooltipText'>Visitar Linkedin</span>
                </a>
                <a href={cv} download='CV - Axel Brian Dip' target='_blank'>
                    <i className="fa-solid fa-file"></i>
                    <span id='tooltipText'>Descargar CV</span>
                </a>
                <a href="https://github.com/axelbriandip" target='_blank'>
                    <i className="fa-brands fa-github"></i>
                    <span id='tooltipText'>Visitar Github</span>
                </a>
            </div>
            <p>- Hecho por <a href="https://www.linkedin.com/in/axelbriandip/" target='_blank'>Axel Brian Dip</a></p>
        </footer>
    );
};

export default Footer;
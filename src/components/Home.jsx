import React from 'react';

// import img
import photo from '../img/foto-perfil1.jpg';

// import cv
import cv from '../cv-abd.pdf';

const Home = () => {

    const cv_alert = () => {
        swal("Todavía no está cargado el CV");
    }

    return (
        <section className='container-home'>
            {/* circles */}
            <article className="circles col-md-5 col-sm-12">
                <div className="photo animate__animated animate__backInDown">
                    <img src={photo} alt="photo"/>
                </div>
                <div className="social-media animate__animated animate__backInLeft">
                    <a href='https://www.linkedin.com/in/axelbriandip/' target='_blank' className="item-sm linkedin" id='tooltip'>
                        <i className="fa-brands fa-linkedin-in"></i>
                        <span id='tooltipText'>Visitar Linkedin</span>
                    </a>
                    <a href={cv} download className="item-sm cv" id='tooltip'>
                    {/* <a href='#' onClick={cv_alert} className="item-sm cv" id='tooltip'> */}
                        <i className="fa-solid fa-file"></i>
                        <span id='tooltipText'>Descargar CV</span>
                    </a>
                    <a href='https://github.com/axelbriandip' target='_blank' className="item-sm github" id='tooltip'>
                        <i className="fa-brands fa-github"></i>
                        <span id='tooltipText'>Visitar Github</span>
                    </a>
                </div>
            </article>
            {/* text */}
            <article className="text col-md-5 col-sm-12 animate__animated animate__backInRight">
                <p className='name'><i className="fa-solid fa-hand animate__animated animate__wobble animate__delay-1s"></i> Soy <span>Axel Brian Dip</span>,</p>
                <h1 className='title'>DESARROLLADOR <br/> FRONT-END.</h1>
                <p className='description'>Me dedico al diseño, creación, realización y mantenimiento de páginas y/o aplicaciones web.</p>
                <button className='btn-contactame'>Contactame</button>
            </article>
            <article className="footer-home col-12 animate__animated animate__backInUp">
                <p>¿Te cuento un poco más sobre mi?</p>
                <i className="fa-solid fa-circle-arrow-down arrow-next"></i>
            </article>
        </section>
    );
};

export default Home;
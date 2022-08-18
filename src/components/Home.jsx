import React from 'react';

const Home = () => {
    return (
        <section className='container-home'>
            {/* circles */}
            <article className="circles col-5 col-s-12">
                <div className="photo animate__animated animate__backInDown"></div>
                <div className="social-media animate__animated animate__backInLeft">
                    <div className="item-sm linkedin" id='tooltip'>
                        <i className="fa-brands fa-linkedin-in"></i>
                        <span id='tooltipText'>Visitar Linkedin</span>
                    </div>
                    <div className="item-sm cv" id='tooltip'>
                        <i className="fa-solid fa-file"></i>
                        <span id='tooltipText'>Descargar CV</span>
                    </div>
                    <div className="item-sm github" id='tooltip'>
                        <i className="fa-brands fa-github"></i>
                        <span id='tooltipText'>Visitar Github</span>
                    </div>
                </div>
            </article>
            {/* text */}
            <article className="text col-5 col-s-12 animate__animated animate__backInRight">
                <p className='name'><i className="fa-solid fa-hand animate__animated animate__wobble animate__delay-1s"></i> Soy <span>Axel Brian Dip</span>,</p>
                <h1 className='title'>DESARROLLADOR <br/> FRONT-END.</h1>
                <p className='description'>Me dedico al diseño, creación, realización y mantenimiento de páginas y/o aplicaciones web.</p>
                <button className='btn-contactame'>Contactame</button>
            </article>
            <article className="footer-home col-12">
                <p>¿Te cuento un poco más sobre mi?</p>
                <i className="fa-solid fa-circle-arrow-down"></i>
            </article>
        </section>
    );
};

export default Home;
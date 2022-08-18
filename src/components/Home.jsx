import React from 'react';

const Home = () => {
    return (
        <section className='container-home'>
            {/* circles */}
            <div className="circles">
                <div className="photo animate__animated animate__backInDown"></div>
                <div className="social-media animate__animated animate__backInLeft">
                    <div className="item-sm linkedin" id='tooltip'>
                        <i className="fa-brands fa-linkedin-in"></i>
                        <span id='tooltipText'>Linkedin</span>
                    </div>
                    <div className="item-sm cv" id='tooltip'>
                        <i className="fa-solid fa-file"></i>
                        <span id='tooltipText'>Curriculum Vitae</span>
                    </div>
                    <div className="item-sm github" id='tooltip'>
                        <i className="fa-brands fa-github"></i>
                        <span id='tooltipText'>Github</span>
                    </div>
                </div>
            </div>
            {/* text */}
            <div className="text animate__animated animate__backInRight">
                <p className='name'><i className="fa-solid fa-hand animate__animated animate__wobble animate__delay-1s"></i> Soy <span>Axel Brian Dip</span>,</p>
                <h1 className='title'>DESARROLLADOR <br /> FRONT-END.</h1>
                <p className='description'>Me dedico al diseño, creación, realización y mantenimiento <br /> de páginas y/o aplicaciones web.</p>
                <button>Contactame</button>
            </div>
        </section>
    );
};

export default Home;
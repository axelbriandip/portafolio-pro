import React from 'react';

const Abilities = () => {
    return (
        <div className='section-abilities'>
            <hr />
            <h2>Mis habilidades</h2>
            <p>A continuación, te cuento lo más importante que sé..</p>

            <div className="container-cards">
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <i className="fa-brands fa-react"></i>
                        </div>
                        <div className="flip-card-back">
                            <h1>REACT.JS</h1>
                            <p>Sirve para desarrollar aplicaciones web de una manera más ordenada y con menos código.</p>
                        </div>
                    </div>
                </div>

                <div className="flip-card card-html">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <i className="fa-brands fa-html5"></i>
                        </div>
                        <div className="flip-card-back">
                            <h1>HTML</h1>
                            <p>Sirve para estructurar y dar contenido al desarrollo de una página web a través de etiquetas.</p>
                        </div>
                    </div>
                </div>

                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <i className="fa-brands fa-js"></i>
                        </div>
                        <div className="flip-card-back">
                            <h1>JAVASCRIPT</h1>
                            <p>Sirve para añadir características interactivas y dinamismo a tu página. Es imprescindible para el desarrollo web.</p>
                        </div>
                    </div>
                </div>

                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <i className="fa-brands fa-css3-alt"></i>
                        </div>
                        <div className="flip-card-back">
                            <h1>CSS</h1>
                            <p>Sirve para manejar el diseño y presentación de las páginas web, es decir, cómo lucen cuando un usuario las visita.</p>
                        </div>
                    </div>
                </div>

                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <i className="fa-brands fa-git-alt"></i>
                        </div>
                        <div className="flip-card-back">
                            <h1>GIT</h1>
                            <p>Sirve para trabajar en equipo de una manera mucho más simple y óptima cuando estamos desarrollando.</p>
                        </div>
                    </div>
                </div>

                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <i className="fa-brands fa-bootstrap"></i>
                        </div>
                        <div className="flip-card-back">
                            <h1>BOOTSTRAP</h1>
                            <p>Este framework facilita la maquetación de páginas web, ya que te permite crear una interfaz muy limpia y responsive.</p>
                        </div>
                    </div>
                </div>

            </div> {/* end .container-cards */}
        </div>
    );
};

export default Abilities;
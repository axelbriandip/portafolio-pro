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
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero alias cupiditate adipisci assumenda distinctio odit accusamus quisquam.</p>
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
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero alias cupiditate adipisci assumenda distinctio odit accusamus quisquam.</p>
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
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero alias cupiditate adipisci assumenda distinctio odit accusamus quisquam.</p>
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
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero alias cupiditate adipisci assumenda distinctio odit accusamus quisquam.</p>
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
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero alias cupiditate adipisci assumenda distinctio odit accusamus quisquam.</p>
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
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero alias cupiditate adipisci assumenda distinctio odit accusamus quisquam.</p>
                        </div>
                    </div>
                </div>

            </div> {/* end .container-cards */}
        </div>
    );
};

export default Abilities;
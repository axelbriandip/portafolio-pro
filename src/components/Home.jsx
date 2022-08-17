import React from 'react';

const Home = () => {
    return (
        <section className='container-home'>

            <div className="circles">
                <div className="photo"></div>
                <div className="social-media">
                    <div className="linkedin"><i className="fa-brands fa-linkedin-in"></i></div>
                    <div className="cv"><i className="fa-solid fa-file"></i></div>
                    <div className="github"><i className="fa-brands fa-github"></i></div>
                </div>
            </div>

        </section>
    );
};

export default Home;
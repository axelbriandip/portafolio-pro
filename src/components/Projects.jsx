import React from 'react';

// import img
import photo from '../img/portada-pokemon.jpg';

import CardProject from './CardProject';

const Projects = () => {
    return (
        <div className='container-projects'>
            <h2>Algunos proyectos..</h2>
            <div className="container-cards-projects">
                <CardProject
                photo={photo}
                title={'Pokedex'}
                description={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, maiores corporis! Architecto optio placeat accusantium eaque sit porro. Illum quia aliquid.'}
                />
                <CardProject
                photo={photo}
                title={'Rick & Morty'}
                description={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, maiores corporis! Architecto optio placeat accusantium eaque sit porro. Illum quia aliquid.'}
                />
                <CardProject
                photo={photo}
                title={'Ecommerce'}
                description={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, maiores corporis! Architecto optio placeat accusantium eaque sit porro. Illum quia aliquid.'}
                />
            </div>
        </div>
    );
};

export default Projects;
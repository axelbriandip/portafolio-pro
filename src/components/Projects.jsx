import React from 'react';

// import img
import pokemon from '../img/pokemon1-01-01.jpg';
import rym from '../img/rym1-01-01.jpg';
import ecommerce from '../img/ecommerce1-01-01.jpg';

import CardProject from './CardProject';

const Projects = () => {
    return (
        <div className='container-projects'>
            <h2>Algunos proyectos..</h2>
            <div className="container-cards-projects">
                <CardProject
                photo={pokemon}
                title={'Pokedex'}
                description={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, maiores corporis! Architecto optio placeat accusantium eaque sit porro. Illum quia aliquid.'}
                link_github={'https://github.com/axelbriandip/pokedex'}
                link_netlify={'https://pokedex-axelbriandip.netlify.app'}
                />
                <CardProject
                photo={rym}
                title={'Rick & Morty'}
                description={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, maiores corporis! Architecto optio placeat accusantium eaque sit porro. Illum quia aliquid.'}
                link_github={'https://github.com/axelbriandip/rickAndMorty'}
                link_netlify={'https://rickandmorty-academlo.netlify.app'}
                />
                <CardProject
                photo={ecommerce}
                title={'Ecommerce'}
                description={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, maiores corporis! Architecto optio placeat accusantium eaque sit porro. Illum quia aliquid.'}
                link_github={'https://github.com/axelbriandip/ecommerce'}
                link_netlify={'https://ecommerce-axelbriandip.netlify.app'}
                />
            </div>
        </div>
    );
};

export default Projects;
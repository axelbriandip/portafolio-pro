import React from 'react';

// import img
import pokemon from '../img/pokemon1-01-01.jpg';
import rym from '../img/rym1-01-01.jpg';
import ecommerce from '../img/ecommerce1-01-01.jpg';

import CardProject from './CardProject';

const Projects = () => {
    return (
        <div className='container-projects' id='goto-projects'>
            <div className="text-projects">
                <h2>Algunos proyectos..</h2>
                <p>A continuación, te comparto algunos trabajos hechos 100% por mi, aplicando todas las tecnologías previamente citadas.<br/>
                Cualquier duda, sugerencia y/o recomendación, te invito a hacermela saber en la <a href="#goto-contact">sección de contacto</a>.</p>
            </div>
            <div className="container-cards-projects">
                <CardProject
                photo={pokemon}
                title={'Pokedex'}
                description={'Buscá tu pokemón preferido ya sea por nombre o tipo y obtené una vista detallada con toda su información.'}
                link_github={'https://github.com/axelbriandip/pokedex'}
                link_netlify={'https://pokedex-axelbriandip.netlify.app'}
                />
                <CardProject
                photo={rym}
                title={'Rick & Morty'}
                description={'Encontrá, universo por universo, todos los personajes correspondientes y conocé sus datos más importantes.'}
                link_github={'https://github.com/axelbriandip/rickAndMorty'}
                link_netlify={'https://rickandmorty-academlo.netlify.app'}
                />
                <CardProject
                photo={ecommerce}
                title={'Ecommerce'}
                description={'Create un usuario, logeate y buscá el producto que más te guste a través de filtros, obtené una vista detallada de cada uno y agregalos al carrito de compras.'}
                link_github={'https://github.com/axelbriandip/ecommerce'}
                link_netlify={'https://ecommerce-axelbriandip.netlify.app'}
                />
            </div>
        </div>
    );
};

export default Projects;
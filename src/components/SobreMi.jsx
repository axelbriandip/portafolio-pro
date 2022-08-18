import React from 'react';

const SobreMi = () => {
    return (
        <section className='container-sobre-mi row'>
            <article className="sm-main col-md-12">
                <i className="fa-solid fa-child-reaching"></i><h2>Sobre mí</h2>
                <p>Soy un estudiante de Programación de la ciudad de Tierra del Fuego, Argentina. En este momento me encuentro cursando un bootcamp en la plataforma de Academlo y también tengo hecha la carrera de Técnico Superior en Programación en la Universidad Tecnológica Nacional de mi provincia. Mi deseo principal hoy en día es poder seguir creciendo en este ámbito del desarrollo web (especialmente pensando en el frontend) y, el día de mañana, poder dedicarme a esto.</p>
            </article>
            <article className="sm-hobbie1 col-md-6 col-sm-12">
                <i className="fa-solid fa-futbol"></i><h2>Presidente de mi club</h2>
                <p>Orgulloso de mi humilde equipo, creado por mi y un amigo, que al día de hoy sigue en pie, el <a id='tooltip' href="https://facebook.com/clubolimpo.rg" target='_blank'>Club Olimpo<span id='tooltipText'>Visitar Facebook</span></a>. Siempre fuí un apasionado del deporte y del fútbol en especial, desde pequeño mi sueño era tener un club que pueda participar de los mejores torneos de mi provincia y hoy puedo decir que se hizo realidad.</p>
            </article>
            <article className="sm-hobbie1 col-md-6 col-sm-12">
                <i className="fa-solid fa-shop"></i><h2>Propietario de mi tienda</h2>
                <p>Otra faceta importante en mi vida se trata de mi propia tienda de ropa femenina, <a id='tooltip' href="https://instagram.com/mercurio.rg" target='_blank'>Mercurio Indumentaria<span id='tooltipText'>Visitar Instagram</span></a>. Funcionando de manera ininterrumpida desde junio del 2020. Tengo el orgullo de poder decir que es un emprendimiento propio que no para de crecer y con grandes aspiraciones para 2023.</p>
            </article>
            <article className='footer-sobremi col-md-12'>
                <p>¿Te cuento mis habilidades?</p>
                <i className="fa-solid fa-circle-arrow-down arrow-next"></i>
            </article>
        </section>
    );
};

export default SobreMi;
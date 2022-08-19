import React from 'react';

const CardProject = ({ photo, title , description, link_github, link_netlify}) => {
    return (
        <div className="card-project">
            <img src={photo} alt="Avatar" className="image"/>
            <div className="overlay">
                <div className="info-project">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <br/>
                    <div className="links-project">
                        <a href={link_github} target='_blank' className='github-project'>Ver Github</a>
                        <a href={link_netlify} target='_blank'>Ver Netlify</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardProject;
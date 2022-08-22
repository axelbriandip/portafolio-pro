import React from 'react';

const Contact = () => {
    return (
        <div className='container-contact row' id='goto-contact'>
            <h2 className='col-md-12'>¡Contactame y trabajemos juntos!</h2>
            <div className='col-md-6 text-contact'>
                <p>Si llegaste hasta acá y estas interesado/a en saber cómo puedo ayudar a tu empresa o tenes un proyecto en el que creas que pueda encajar, te invito a que dejarme un mensaje y con gusto me pondré en contacto contigo a la brevedad.</p>
                <br /><br />
                <p>Si llegaste hasta acá y estas interesado/a en saber cómo puedo ayudar a tu empresa o tenes un proyecto en el que creas que pueda encajar, te invito a que dejarme un mensaje y con gusto me pondré en contacto contigo a la brevedad.</p>
                <br /><br />
            </div>
            <div className="container-form col-md-6">
                <form>
                    <label htmlFor="fname">Nombre</label>
                    <input type="text" id="fname" name="firstname" placeholder="¿Cómo te llamas?"/>
                    {/* <label for="email">Correo electrónico</label>
                    <input type="email" id="email" name="email" placeholder="¿Cuál es tu correo electrónico?"/> */}

                    <label htmlFor="subject">Mensaje</label>
                    <textarea id="subject" name="subject" placeholder="Escribí tu mensaje.." style={{height:'200px'}}></textarea>

                    <input type="submit" value="Enviar mensaje"></input>
                </form>
            </div>
        </div>
    );
};

export default Contact;
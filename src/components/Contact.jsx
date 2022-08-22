import React from 'react';

const Contact = () => {
    return (
        <div className='container-contact row' id='goto-contact'>
            <h2 className='col-md-12'>¡Contactame y trabajemos juntos!</h2>
            <div className='col-md-6 text-contact'>
                <p>Espero que haya sido de tu agrado todo lo que viste en el portafolio y te haya despertado el interés en mi trabajo, ya que todo está hecho con muchísimo esfuerzo y dedicación.
                <br/><br/>
                Si llegaste hasta acá y estas interesado/a en saber cómo puedo ayudar a tu empresa o tenes un proyecto en el que creas que pueda encajar, te invito a dejarme un mensaje y con gusto me pondré en contacto contigo a la brevedad.
                <br/><br/>
                Podes escribirme directamente en el siguiente formulario, por email o por teléfono.</p>
                <br/><br/><br/>
                <div className='phone'><i className="fa-solid fa-phone-flip"></i> +54 2964-569727</div>
                <div className='email'><i className="fa-solid fa-envelope"></i> axelbriandip.rg@gmail.com</div>
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
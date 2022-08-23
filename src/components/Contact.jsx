import React, { useState } from 'react';

const Contact = () => {
    const [ name, setName ] = useState('');
    const [ message, setMessage ] = useState('');    
    const alertConfirm = () => {
        if(name != '' && message != '') {
            swal("¡Correo enviado!", "Muchas gracias por ponerte en contacto conmigo.", "success");
        }
    }

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
                <form onSubmit={alertConfirm} action="https://formsubmit.co/axelbriandip.rg@gmail.com" method="POST">
                    <label htmlFor="name">Nombre</label>
                    <input value={name} onChange={e => setName(e.target.value)} type="text" id="name" name="name" placeholder="¿Cómo te llamas?" required/>
                    <label htmlFor="message">Mensaje</label>
                    <textarea value={message} onChange={e => setMessage(e.target.value)} id="message" name="message" placeholder="Escribí tu mensaje.." style={{height:'200px'}} required></textarea>
                    <input  type="submit" value="Enviar mensaje"></input>
                    {/* cambiar template */}
                    <input type="hidden" name="_template" value="box"/>
                    {/* valor por default del asunto */}
                    <input type="hidden" name="_subject" value="&#128235; ¡Nuevo mensaje del portafolio!"/>
                    {/* ¿A dónde va? */}
                    <input type="hidden" name='_next' value='https://axelbriandip.netlify.app/'/>
                    {/* <input type="hidden" name='_next' value='http://localhost:3000/'/> */}
                    {/* Sin captcha */}
                    <input type="hidden" name='_captcha' value={false} />
                </form>
            </div>
        </div>
    );
};

export default Contact;
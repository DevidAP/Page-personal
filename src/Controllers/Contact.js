import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [status, setStatus] = useState(''); // Estado para el mensaje de confirmación

  const handleSubmit = async (e) => {
    e.preventDefault(); // Evitar que se recargue la página

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xvgoqkwe', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setStatus('¡Mensaje enviado con éxito!');
        form.reset(); // Limpiar el formulario
      } else {
        setStatus('Hubo un error al enviar tu mensaje. Inténtalo de nuevo.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('Hubo un error al enviar tu mensaje. Inténtalo de nuevo.');
    }
  };

  return (
    <section className="contact">
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Tu nombre"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Tu correo"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            name="message"
            placeholder="Escribe tu mensaje"
            required
          ></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>

      {/* Mensaje de confirmación */}
      {status && <p className="status-message">{status}</p>}

      <div className="contact-buttons">
        <a href="tel:+525561015604" className="contact-button">Llamar</a>
      </div>
    </section>
  );
}

export default Contact;

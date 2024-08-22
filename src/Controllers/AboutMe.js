import React from 'react';
import './AboutMe.css';
function AboutMe() {
  return (
    <section className="about-me">
      <h1>Sobre Mí</h1>
      <p>Hola, soy David Arroyo Pichardo, un desarrollador web con experiencia en lenguajes de programación. Me apasiona crear soluciones innovadoras y funcionales que resuelvan problemas reales.</p>
      <h2>Experiencia</h2>
      <p>He trabajado en diversos proyectos, desde aplicaciones web completas hasta interfaces de usuario atractivas. Algunos de los proyectos más destacados incluyen "Jabones artesanales"</p>
      <h2>Intereses</h2>
      <p>En mi tiempo libre, disfruto de programar. Estoy siempre buscando nuevas formas de aprender y crecer profesionalmente.</p>
      <a
        href="/cv-david-arroyo-pichardo.pdf" 
        download="CV_David_Arroyo_Pichardo.pdf" 
        className="download-button">
          Descargar CV

      </a>
    </section>
  );
}

export default AboutMe;

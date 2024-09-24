// src/Controllers/Projects.js
import React from 'react';
import './Projects.css'; // Asegúrate de tener este archivo de estilos

const projects = [
  {
    title: 'Pagina de jabones',
    description: 'Pagina de jabones.',
    imageUrl: './jabones.png',
    link: 'https://artesanales.netlify.app/',
  },
  {
    title: 'Ejercicios',
    description: 'blog.',
    imageUrl: 'url-de-imagen-2.jpg',
    link: 'https://ejercices.netlify.app/',
  },
  // Agrega más proyectos según sea necesario
];

function Projects() {
  return (
    <section className="projects">
      <h2>Proyectos</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.imageUrl} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">Ver Proyecto</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

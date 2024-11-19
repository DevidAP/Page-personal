// src/Controllers/Projects.js
import React from 'react';
import './Projects.css'; // Asegúrate de tener este archivo de estilos

const projects = [
  {
    title: 'Pagina de jabones',
    description: 'Pagina de jabones en la que se puede comprar jabones, tonicos, shampoo y macerados.',
    imageUrl: './jabones.png',
    link: 'https://artesanales.netlify.app/',
  },
  {
    title: 'Ejercicios',
    description: 'blog en que te recomienda ejercicios para cada parte del cuerrpo.',
    imageUrl: '/gym.png',
    link: 'https://ejercicios-blog.netlify.app/',
  },
  {
    title: 'AdoptMe',
    description: 'Página web en que las se registran las mascotas para que se puedan adoptar además de que se pueden registrar usuarios.',
    imageUrl: '/AdoptMe.png',
    link: '/',
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

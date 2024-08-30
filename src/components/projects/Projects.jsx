import React from 'react';
import './projects.css';


const projects = [
    {
      title: 'Project 1',
      description: 'This is a brief description of Project 1.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      link: 'https://github.com/username/project1',
    },
    {
      title: 'Project 2',
      description: 'This is a brief description of Project 2.',
      technologies: ['Java', 'Spring Boot', 'MySQL'],
      link: 'https://github.com/username/project2',
    },
    // Add more projects as needed
  ];


  const ProjectCard = ({ project }) => (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
        View Project
      </a>
    </div>
  );

const Projects = () => {
    return (
        <section className='projects section' id='projects'>      
            <h2 className='projects__title'>Projects</h2>
            <span className='projects__subtitle'>Technology</span>
            <div className="projects__container container grid">
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}                                
            </div>
        </section>
    );
    };

export default Projects;
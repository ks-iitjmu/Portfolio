import React from 'react';
import './project.css';

interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Project 1: E-Commerce Website',
    description: 'A fully functional e-commerce website built with React and Node.js.',
    link: 'https://example.com/project1',
  },
  {
    id: 2,
    title: 'Project 2: Task Manager App',
    description: 'A task management application with drag-and-drop functionality.',
    link: 'https://example.com/project2',
  },
  {
    id: 3,
    title: 'Project 3: Weather App',
    description: 'A weather App that displays real-time weather data using APIs.',
    link: 'https://ks-iitjmu.github.io/weatherapp/',
  },
  {
    id: 4,
    title: 'Project 4: Chatbot',
    description: 'An intelligent chatbot that can assist users with various queries and provide information in real-time.',
    link: 'https://example.com/project4',
  },
  {
    id: 5,
    title: 'Project 5: DevCard',
    description: 'Track your coding journey with real-time commit stats and LeetCode solutions. Showcase your progress and compare achievements with fellow developers!',
    link: 'https://dev-card-two.vercel.app/',
  },
];

const Project: React.FC = () => {
  return (
    <div className="pro">
      <div className="background-shapes">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <div className="portfolio">
        <h1>My Projects</h1>
        <div className="projects-container">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="certifications">
        <h1>My Certifications</h1>
        <div className="certifications-grid">
          {[{
              id: 1,
              name: 'Python Data Associate',
              provider: 'Data Camp',
              image: '/cert/data.png',
              link: 'https://www.datacamp.com/certificate/PDA0019676905449',
            },
            {
              id: 2,
              name: 'Numpy Certification',
              provider: 'DataCamp',
              image: '/cert/numpy.png',
              link: 'https://drive.google.com/file/d/19kBZyh-PoApPZem98hYVUr2h9RVqgfuG/view?usp=sharing',
            },
            {
              id: 3,
              name: 'Pandas Certification',
              provider: 'DataCamp',
              image: '/cert/pandas.png',
              link: 'https://drive.google.com/file/d/1Tt5mScjs6xqNAPQRBVFnOAk7VGw5l3pX/view?usp=drive_link',
            },
            {
              id: 4,
              name: 'Matplotlib Certification',
              provider: 'DataCamp',
              image: '/cert/matplotlib.png',
              link: 'https://drive.google.com/file/d/1zYY3DJnbTg2wtmmfTPEY1dBySFTYIj2v/view?usp=sharing',
            },
            {
              id: 5,
              name: 'Python Certification',
              provider: 'HackerRank',
              image: '/cert/python.png',
              link: 'https://www.hackerrank.com/certificates/61a81b1915be',
            },
            {
              id: 6,
              name: 'Problem Solving',
              provider: 'HackerRank',
              image: '/cert/problem.png',
              link: 'https://www.hackerrank.com/certificates/7ac1b7a7820c',
            },
          ].map((cert) => (
            <div key={cert.id} className="certification-card">
              <img src={cert.image} alt={cert.name} className="certification-image" />
              <h2>{cert.name}</h2>
              <p>{cert.provider}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="certification-link"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
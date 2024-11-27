import React from 'react';

const Projects = () => {
  // Project data
  const projects = [
    {
      title: 'Groco Project',
      imgSrc: 'images/port-img-1.png',
      liveLink: 'https://areeba-fatima.github.io/grocery-shop/',
      githubLink: 'https://github.com/AREEBA-FATIMA/grocery-shop.git',
      description: 'A responsive e-commerce website to browse and purchase groceries. Includes add-to-cart, remove-cart, product showing, and review options.',
      technologies: ['images/s-1.png', 'images/s-2.png', 'images/s-3.png'],
    },
    {
      title: 'Credify Project',
      imgSrc: 'images/port-img-2.png',
      liveLink: 'https://credify-project.vercel.app/',
      githubLink: 'https://github.com/AREEBA-FATIMA/Credify',
      description: 'An application to provide information about types of cards and their benefits',
      technologies: ['images/s-5.png', 'images/s-6.png'],
    },
    {
      title: 'CoachIQ Project',
      imgSrc: 'images/port-img-6.png',
      liveLink: 'https://areeba-fatima.github.io/Coach-IQ/',
      githubLink: 'https://github.com/AREEBA-FATIMA/Coach-IQ',
      description: 'An online platform for scheduling and attending classes. Teachers can upload videos, and students can access the courses.',
      technologies: ['images/s-1.png', 'images/s-2.png', 'images/s-3.png'],
    },
    {
      title: 'Personal Portfolio',
      imgSrc: 'images/port-img-4.png',
      liveLink: 'https://areeba-fatima.github.io/Personal-Portfolio/',
      githubLink: 'https://github.com/AREEBA-FATIMA/Personal-Portfolio',
      description: 'A personal portfolio website showcasing my skills, services, and personal information.',
      technologies: ['images/s-1.png', 'images/s-2.png', 'images/s-3.png'],
    },
    {
      title: 'Inwood Project',
      imgSrc: 'images/port-img-5.png',
      liveLink: 'https://inwood-project.vercel.app/',
      githubLink: 'https://github.com/AREEBA-FATIMA/inwood-project',
      description: 'A pixel-perfect web design based on a Figma template. Tailored for responsive use and optimized for various devices.',
      technologies: ['images/s-5.png', 'images/s-7.png', 'images/s-6.png'],
    },
    {
      title: 'Amazon Clone',
      imgSrc: 'images/port-img-3.png',
      liveLink: 'https://areeba-fatima.github.io/Amazon/',
      githubLink: 'https://github.com/AREEBA-FATIMA/Amazon',
      description: 'A static Amazon clone with product listings. Includes basic functionality like navigation and product display.',
      technologies: ['images/s-1.png', 'images/s-2.png'],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-black text-white flex flex-col items-center py-10">
      <h1 className="text-5xl font-bold mb-8 text-center">My Projects</h1>
      <p className="text-lg max-w-3xl text-center mb-12">
        Explore some of my latest projects. Hover to learn more, and click the icons to view the live demo or GitHub repository!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 p-4 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 ease-out"
          >
            <div className="relative group">
              {/* Project Image */}
              <img
                src={project.imgSrc}
                alt={project.title}
                className="w-full h-52 object-cover rounded-lg"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg px-4 text-center">
                <p className="text-white text-sm">{project.description}</p>
                <div className="flex space-x-4 mt-4">
                  {project.technologies.map((tech, idx) => (
                    <img
                      key={idx}
                      src={tech}
                      alt={`Technology ${idx + 1}`}
                      className="w-8 h-8"
                    />
                  ))}
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-4">{project.title}</h2>
            <div className="flex justify-between items-center mt-4">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 text-xl hover:text-red-400"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 text-xl hover:text-blue-300"
              >
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

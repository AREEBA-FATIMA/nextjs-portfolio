import React from 'react';

const Skills = () => {
  return (
    <div className="relative bg-black min-h-screen py-16 flex flex-col items-center">
      <h1 className="text-5xl font-bold text-white mb-12 tracking-wider">My Skills</h1>

      {/* Diagonal Layer 1 */}
      <div className="relative w-full h-12 -skew-y-6 bg-gradient-to-r from-black to-purple-600"></div>
      
      {/* Skill Cards */}
      <div className="relative flex flex-wrap justify-center mt-12">
        {[
          { name: 'HTML', icon: 'fab fa-html5', description: 'Structuring web pages using semantic HTML5.' },
          { name: 'CSS', icon: 'fab fa-css3-alt', description: 'Creating responsive layouts with CSS3.' },
          { name: 'JavaScript', icon: 'fab fa-js', description: 'Adding interactivity to web pages.' },
          { name: 'TypeScript', image: '/images/ts-2.png', description: 'Writing type-safe applications.' },
          { name: 'React', icon: 'fab fa-react', description: 'Building UI with React.' },
          { name: 'Next.js', image: '/images/next-2.png', description: 'Creating server-rendered applications.' },
          { name: 'Tailwind CSS', image: '/images/tailwind-2.png', description: 'Rapid UI development with utility-first CSS.' },
          { name: 'Figma', icon: 'fab fa-figma', description: 'Designing interfaces and prototypes.' },
          { name: 'Bootstrap', icon: 'fab fa-bootstrap', description: 'Building responsive sites with Bootstrap.' },
        ].map(skill => (
          <div
            key={skill.name}
            className="m-2 p-4 w-48 h-48 rounded-full bg-purple-800 backdrop-blur-lg shadow-lg transition-transform duration-500 ease-in-out flex flex-col justify-center items-center transform hover:scale-110 hover:rotate-12"
          >
            {/* Render image if available, otherwise fallback to icon */}
            {skill.image ? (
              <img
                src={skill.image}
                alt={`${skill.name} logo`}
                className="w-11 h-11 object-contain"
              />
            ) : (
              <i className={`${skill.icon} text-4xl text-white hover:text-black transition-colors duration-300`}></i>
            )}
            <h2 className="text-lg font-semibold text-white mt-2">{skill.name}</h2>
            <p className="text-center text-white text-sm">{skill.description}</p>
          </div>
        ))}
      </div>

      {/* Diagonal Layer 2 */}
      <div className="relative w-full h-12 mt-20 -skew-y-6 bg-gradient-to-r from-black to-purple-600"></div>
    </div>
  );
};

export default Skills;

import React from 'react';

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-black text-white flex flex-col items-center justify-center py-10">
      <h1 className="text-5xl font-bold mb-8 text-center">My Services</h1>
      <p className="text-lg max-w-3xl text-center mb-12">
        As a skilled web developer, I offer the following professional services to help bring your ideas to life:
      </p>

      {/* Services List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-4">
        
        {/* Service 1: Custom Website Development */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 ease-out flex flex-col items-center">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-700 transition-all duration-300 ease-in-out mb-2">
            <i className="fas fa-laptop-code text-3xl"></i>
          </div>
          <h2 className="text-2xl font-semibold mb-1">Custom Web Development</h2>
          <p className="text-center">
            Building responsive and dynamic websites tailored to your needs.
          </p>
        </div>

        {/* Service 2: UI/UX Design */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 ease-out flex flex-col items-center">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-700 transition-all duration-300 ease-in-out mb-2">
            <i className="fas fa-palette text-3xl"></i>
          </div>
          <h2 className="text-2xl font-semibold mb-1">UI/UX Design</h2>
          <p className="text-center">
            Crafting intuitive and visually appealing interfaces.
          </p>
        </div>

        {/* Service 3: Frontend Development */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 ease-out flex flex-col items-center">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-700 transition-all duration-300 ease-in-out mb-2">
            <i className="fab fa-react text-3xl"></i>
          </div>
          <h2 className="text-2xl font-semibold mb-1">Frontend Development</h2>
          <p className="text-center">
            Creating dynamic, interactive, and responsive user interfaces.
          </p>
        </div>

        {/* Service 4: Backend Development */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 ease-out flex flex-col items-center">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-700 transition-all duration-300 ease-in-out mb-2">
            <i className="fas fa-server text-3xl"></i>
          </div>
          <h2 className="text-2xl font-semibold mb-1">Backend Development</h2>
          <p className="text-center">
            Developing robust server-side solutions and APIs.
          </p>
        </div>

        {/* Service 5: Pixel-Perfect Designs */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 ease-out flex flex-col items-center">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-700 transition-all duration-300 ease-in-out mb-2">
            <i className="fas fa-ruler-combined text-3xl"></i>
          </div>
          <h2 className="text-2xl font-semibold mb-1">Pixel-Perfect Designs</h2>
          <p className="text-center">
            Creating precise, pixel-perfect designs using Figma.
          </p>
        </div>

        {/* Service 6: SEO Optimization */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 ease-out flex flex-col items-center">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-700 transition-all duration-300 ease-in-out mb-2">
            <i className="fas fa-chart-line text-3xl"></i>
          </div>
          <h2 className="text-2xl font-semibold mb-1">SEO Optimization</h2>
          <p className="text-center">
            Boosting your website's visibility on search engines.
          </p>
        </div>
      </div>

      {/* Contact Me Button */}
      <div className="mt-12">
        <a
          href="/contact"
          className="bg-red-500 text-white font-bold py-3 px-6 rounded-full hover:bg-red-600 transition duration-300"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
};

export default Services;

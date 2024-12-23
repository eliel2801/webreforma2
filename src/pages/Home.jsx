import React from 'react';
import About from '../components/About';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center">
        {/* Background Video ou Imagem Principal */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2"
            alt="Modern Office"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Creating Spaces That Inspire
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Transform your workspace into a hub of innovation and productivity
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="bg-yellow-500 text-white px-8 py-4 rounded-full hover:bg-yellow-600 transition-all flex items-center gap-2 text-lg"
              >
                View Our Projects
                <FaArrowRight />
              </Link>
              <Link
                to="/contact"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full hover:bg-white/20 transition-all text-lg"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Projects Preview */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover how we transform ordinary spaces into extraordinary environments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Modern Office",
                image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
                category: "Office Space"
              },
              {
                title: "Creative Studio",
                image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
                category: "Studio"
              },
              {
                title: "Coworking Hub",
                image: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2",
                category: "Coworking"
              }
            ].map((project, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-xl"
              >
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-white/90">{project.category}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-yellow-500 hover:text-yellow-600 font-medium"
            >
              View All Projects
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>

      {/* About Section */}
      <About />

      {/* Call to Action */}
      <div className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's create an environment that inspires creativity and drives success
          </p>
          <Link
            to="/contact"
            className="bg-yellow-500 text-white px-8 py-4 rounded-full hover:bg-yellow-600 transition-all inline-flex items-center gap-2 text-lg"
          >
            Start Your Project
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

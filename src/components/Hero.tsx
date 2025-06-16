import React from 'react';
import { ArrowDown, Eye, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const viewResume = () => {
    window.open('/portfolio-website/Resume_updated_reduced_version_May_25_.pdf', '_blank');
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 opacity-0 animate-scaleIn delay-200">
          <img
            src="/portfolio-website/images/033466.JPG"
            alt="Headshot of Gokul"
            className="w-32 h-32 rounded-full mx-auto mb-8 object-cover shadow-lg border-4 border-white hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight opacity-0 animate-slideInUp delay-300">
          Hello, I'm <span className="text-blue-600">Gokul</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed opacity-0 animate-fadeIn delay-500">
          Passionate Electronics and Communication Engineer committed to crafting innovative tech solutions and delivering real-world impact through a blend of creativity, curiosity, and technical excellence.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 opacity-0 animate-slideInUp delay-600">
          <button 
            onClick={viewResume}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 hover:scale-105 transition-all duration-300 flex items-center gap-2 animate-pulse-hover"
          >
            <Eye size={20} />
            View Resume
          </button>
          <button
            onClick={scrollToAbout}
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white hover:scale-105 transition-all duration-300"
          >
            Learn More
          </button>
        </div>
        
        <div className="flex justify-center space-x-6 mb-12 opacity-0 animate-fadeIn delay-700">
          <a
            href="mailto:gokuljayakumar89@gmail.com"
            className="text-gray-600 hover:text-blue-600 hover:scale-110 hover:rotate-12 transition-all duration-300"
          >
            <Mail size={24} />
          </a>
          <a
            href="https://linkedin.com/in/gokul-j-13g"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 hover:scale-110 hover:rotate-12 transition-all duration-300"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com/gokulj2005"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 hover:scale-110 hover:rotate-12 transition-all duration-300"
          >
            <Github size={24} />
          </a>
        </div>
        
        <button
          onClick={scrollToAbout}
          className="animate-bounce text-gray-400 hover:text-blue-600 transition-colors opacity-0 animate-fadeIn delay-800"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
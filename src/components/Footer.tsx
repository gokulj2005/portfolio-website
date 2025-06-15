import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <button
            onClick={scrollToTop}
            className="text-2xl font-bold mb-4 hover:text-blue-400 transition-colors"
          >
            Gokul
          </button>
          
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Thank you for visiting my portfolio. I'm always excited to discuss new opportunities and collaborations.
          </p>
          
          <div className="flex items-center justify-center text-gray-400">
            <span>Made with</span>
            <Heart className="w-4 h-4 mx-2 text-red-500" />
            <span>and a lot of coffee</span>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-gray-500">
            <p>&copy; {new Date().getFullYear()} Gokul. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
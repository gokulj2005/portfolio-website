import React from 'react';
import { User, Award, Heart, Target } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <User className="w-6 h-6" />,
      title: "Professional Background",
      description: "Technically skilled and growth-focused, with hands-on experience in electronics, embedded systems, and AI applications."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Achievements",
      description: "Recognized for innovative thinking, academic excellence, and delivering practical solutions with real-world impact."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Passion",
      description: "Deeply passionate about technology, innovation, and creating solutions that make a positive difference."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Mission",
      description: "Committed to continuous learning and contributing to meaningful projects that drive progress and success."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get to know more about my background, experience, and what drives me to excel in everything I do.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
              alt="Professional workspace"
              className="rounded-lg shadow-lg w-full h-80 object-cover"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I’m a passionate and dedicated Electronics and Communication Engineering student, driven by a desire to build innovative solutions that create real-world impact. I approach every challenge with curiosity, adaptability, and a hunger to learn and grow.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Blending technical skills with strong communication and teamwork, I enjoy collaborating with diverse teams and turning ideas into practical outcomes. I believe in continuous improvement and make it a point to stay updated with evolving technologies and industry best practices. My goal is to contribute meaningfully wherever I go—through both smart engineering and thoughtful execution.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                    {highlight.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{highlight.title}</h4>
                    <p className="text-sm text-gray-600">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
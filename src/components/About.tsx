import React, { useEffect, useRef } from 'react';
import { User, Award, Heart, Target } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animatedElements = entry.target.querySelectorAll('.animate-on-scroll');
            animatedElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

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
    <section id="about" className="py-20 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-on-scroll">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-on-scroll">
            Get to know more about my background, experience, and what drives me to excel in everything I do.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <img
              src="/portfolio-website/images/DSC00079.JPG"
              alt="Professional workspace"
              className="rounded-lg shadow-lg w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm a passionate and dedicated Electronics and Communication Engineering student, driven by a desire to build innovative solutions that create real-world impact. I approach every challenge with curiosity, adaptability, and a hunger to learn and grow.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Blending technical skills with strong communication and teamwork, I enjoy collaborating with diverse teams and turning ideas into practical outcomes. I believe in continuous improvement and make it a point to stay updated with evolving technologies and industry best practices. My goal is to contribute meaningfully wherever I go—through both smart engineering and thoughtful execution.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-3 animate-on-scroll group">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
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
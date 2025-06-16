import React, { useEffect, useRef } from 'react';
import { Github, Calendar, Users } from 'lucide-react';

const Projects = () => {
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
              }, index * 200);
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

  const projects = [
    {
      title: "Voice Translation with Cloning",
      description: "Developed a tool that converts spoken audio from other languages to English while replicating the user's voice for seamless communication.",
      image: "/portfolio-website/images/sample_output.png",
      technologies: ["Python", "OpenAI Whisper", "Gradio"],
      timeline: "2 months",
      teamSize: "1 person",
      githubUrl: "https://github.com/gokulj2005/Voice-Translation-With-Cloning.git"
    },
    {
      title: "ZCZ Based CDMA System Simulation",
      description: "Designed and simulated a CDMA system using ZCZ sequences over AWGN channels using Simulink and Verilog for signal transmission and reception.",
      image: "/portfolio-website/images/zcz.png",
      technologies: ["MATLAB Simulink", "Verilog"],
      timeline: "1 months",
      teamSize: "1 person",
      githubUrl: "#"
    },
    {
      title: "Pedometer for Athletes",
      description: "Built a pedometer to count steps using an accelerometer and display output on an LCD screen, aimed at monitoring athletic performance.",
      image: "/portfolio-website/images/unnamed.webp",
      technologies: ["Arduino", "ADXL335", "I2C", "PCB"],
      timeline: "1 month",
      teamSize: "1 person",
      githubUrl: "#"
    },
    {
      title: "Digital Tachometer",
      description: "Created a device to measure the RPM of motors using an IR sensor and display readings on a digital interface.",
      image: "/portfolio-website/images/Tachometer-close-up.jpg",
      technologies: ["Embedded C", "Arduino", "IR Sensor"],
      timeline: "1 month",
      teamSize: "2 people",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-on-scroll">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-on-scroll">
            A showcase of my most impactful projects that demonstrate my skills and ability to deliver exceptional results.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-500 animate-on-scroll group">
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full font-medium hover:bg-blue-600 hover:text-white transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mb-6 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{project.timeline}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    <span>{project.teamSize}</span>
                  </div>
                </div>
                
                <div className="flex">
                  <a
                    href={project.githubUrl}
                    className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 hover:scale-105 transition-all duration-300"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
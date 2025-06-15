import React from 'react';
import { ExternalLink, Github, Calendar, Users } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Enterprise Solution Platform",
      description: "Developed a comprehensive platform that streamlined operations across multiple departments, resulting in 40% improved efficiency and significant cost savings.",
      image: "https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
      timeline: "6 months",
      teamSize: "8 people",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Data Analytics Dashboard",
      description: "Created an interactive dashboard providing real-time insights and analytics, enabling data-driven decision making across the organization.",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop",
      technologies: ["Python", "D3.js", "MongoDB", "Docker"],
      timeline: "4 months",
      teamSize: "5 people",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Mobile Application Suite",
      description: "Built a comprehensive mobile application that enhanced user engagement by 200% and provided seamless cross-platform functionality.",
      image: "https://images.pexels.com/photos/3184350/pexels-photo-3184350.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop",
      technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
      timeline: "8 months",
      teamSize: "6 people",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Process Automation System",
      description: "Designed and implemented an automation system that reduced manual processing time by 70% and improved accuracy significantly.",
      image: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop",
      technologies: ["Python", "RPA", "API Integration", "Machine Learning"],
      timeline: "5 months",
      teamSize: "4 people",
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my most impactful projects that demonstrate my skills and ability to deliver exceptional results.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full font-medium"
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
                
                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
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
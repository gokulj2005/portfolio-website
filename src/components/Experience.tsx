import React from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "AI Intern",
      company: "Samsung Prism",
      location: "Coimbatore, Tamil Nadu",
      period: "Jan 2025 – Present",
      description: [
        "Developing a GenAI model to generate WiFi and Zigbee signal strength heatmaps",
      ]
    },
    {
      title: "Intern – Reverse Engineering",
      company: "5BRD, Sulur (Indian Air Force)",
      location: "Coimbatore, Tamil Nadu",
      period: "May 2024 – July 2024 ",
      description: [
        "Worked on reverse engineering PCBs of aircraft LRUs",
        "Presented a concept paper on reverse engineering Radio Altimeter indicators for the Dornier aircraft",
        "Gained practical experience in reverse engineering of PCBs, and electronics troubleshooting.",
      ]
    },
    {
      title: "AI Club Member",
      company: "Karunya Hacks, Karunya Institute of Technology and Sciences",
      location: "Coimbatore, Tamil Nadu",
      period: "Sep 2023 – July 2024",
      description: [
        "Collaborated with peers on AI and machine learning projects, contributing to solution design and model development",
        "Engaged in workshops and tech events to stay updated with the latest trends in AI and its practical applications",
        "Served as an organizer in various hackathons and workshops."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my professional journey and key accomplishments.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start">
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                
                <div className="md:ml-16 w-full">
                  <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                        <div className="flex items-center text-blue-600 mb-2">
                          <Building className="w-4 h-4 mr-2" />
                          <span className="font-semibold">{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex flex-col md:items-end text-gray-600">
                        <div className="flex items-center mb-1">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
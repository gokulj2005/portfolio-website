import React from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Position Title",
      company: "Company Name",
      location: "City, State",
      period: "2021 - Present",
      description: [
        "Led cross-functional teams to deliver high-impact projects on time and within budget",
        "Implemented innovative solutions that improved efficiency by 30% and reduced costs",
        "Mentored junior team members and contributed to professional development initiatives",
        "Collaborated with stakeholders to define strategic objectives and execution plans"
      ]
    },
    {
      title: "Mid-Level Position Title",
      company: "Previous Company",
      location: "City, State",
      period: "2018 - 2021",
      description: [
        "Managed complex projects from conception to completion with measurable success metrics",
        "Developed and maintained strong client relationships resulting in 95% retention rate",
        "Streamlined processes and workflows to increase team productivity",
        "Contributed to strategic planning and business development initiatives"
      ]
    },
    {
      title: "Junior Position Title",
      company: "Earlier Company",
      location: "City, State",
      period: "2016 - 2018",
      description: [
        "Gained comprehensive experience in industry best practices and methodologies",
        "Supported senior team members on various high-priority initiatives",
        "Demonstrated strong analytical and problem-solving skills on daily basis",
        "Participated in professional development programs and training opportunities"
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
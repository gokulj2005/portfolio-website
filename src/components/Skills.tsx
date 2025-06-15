import React from 'react';
import { Code, Users, Lightbulb, Target, Zap, Shield } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Technical Skills",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "Programming Languages", level: 90 },
        { name: "Web Development", level: 85 },
        { name: "Database Management", level: 80 },
        { name: "Cloud Technologies", level: 75 }
      ]
    },
    {
      title: "Leadership",
      icon: <Users className="w-6 h-6" />,
      skills: [
        { name: "Team Management", level: 95 },
        { name: "Project Leadership", level: 90 },
        { name: "Mentoring", level: 85 },
        { name: "Strategic Planning", level: 80 }
      ]
    },
    {
      title: "Innovation",
      icon: <Lightbulb className="w-6 h-6" />,
      skills: [
        { name: "Creative Problem Solving", level: 90 },
        { name: "Process Improvement", level: 85 },
        { name: "Technology Adoption", level: 80 },
        { name: "Innovation Management", level: 75 }
      ]
    }
  ];

  const coreCompetencies = [
    { icon: <Target className="w-8 h-8" />, title: "Strategic Thinking", description: "Ability to see the big picture and develop long-term strategies" },
    { icon: <Zap className="w-8 h-8" />, title: "Agile Execution", description: "Quick adaptation to change and efficient project delivery" },
    { icon: <Shield className="w-8 h-8" />, title: "Quality Assurance", description: "Commitment to excellence and attention to detail" }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills, leadership capabilities, and core competencies.
          </p>
        </div>
        
        {/* Skills Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Core Competencies */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Core Competencies</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {coreCompetencies.map((competency, index) => (
              <div key={index} className="text-center p-6 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                  {competency.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{competency.title}</h4>
                <p className="text-gray-600 leading-relaxed">{competency.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
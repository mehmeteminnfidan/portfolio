import React from 'react';
import { skills } from '../mock';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const Skills = () => {
  return (
    <section id="skills" className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-center">
            Beceriler
          </h2>
          <p className="text-lg text-gray-600 mb-16 text-center max-w-2xl mx-auto">
            Uzmanlaştığım teknolojiler ve araçlar
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillCategory, index) => (
              <Card
                key={index}
                className="border-2 border-gray-200 hover:border-gray-900 transition-all duration-300 hover:shadow-xl"
              >
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {skillCategory.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {skillCategory.items.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">
                          {skill.name}
                        </span>
                        <span className="text-sm font-semibold text-gray-900">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-gray-900 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

import React from 'react';
import { experience } from '../mock';
import { Card, CardContent } from './ui/card';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-center">
            Deneyim
          </h2>
          <p className="text-lg text-gray-600 mb-16 text-center max-w-2xl mx-auto">
            Profesyonel yolculuğum
          </p>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 lg:transform lg:-translate-x-1/2"></div>

            <div className="space-y-12">
              {experience.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`relative flex items-start ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 lg:left-1/2 w-8 h-8 bg-gray-900 rounded-full border-4 border-white lg:transform lg:-translate-x-1/2 z-10 shadow-lg"></div>

                  {/* Content Card */}
                  <div className={`ml-16 lg:ml-0 lg:w-1/2 ${
                    index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'
                  }`}>
                    <Card className="border-2 border-gray-200 hover:border-gray-900 transition-all duration-300 hover:shadow-xl">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-3 mb-4">
                          <div className="p-2 bg-gray-100 rounded-lg">
                            <Briefcase size={20} className="text-gray-900" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-900 mb-1">
                              {exp.title}
                            </h3>
                            <p className="text-lg font-semibold text-gray-700 mb-2">
                              {exp.company}
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                          <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin size={16} />
                            <span>{exp.location}</span>
                          </div>
                        </div>

                        <p className="text-gray-700 mb-4 leading-relaxed">
                          {exp.description}
                        </p>

                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold text-gray-900">
                            Sorumluluklar:
                          </h4>
                          <ul className="space-y-2">
                            {exp.responsibilities.map((resp, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                <span className="block w-1.5 h-1.5 rounded-full bg-gray-900 mt-2 flex-shrink-0"></span>
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
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

export default Experience;

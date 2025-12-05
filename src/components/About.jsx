import React from 'react';
import { personalInfo } from '../mock';

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-16 text-center">
            Hakkımda
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-gray-100 rounded-2xl transform rotate-3"></div>
                <img
                  src={personalInfo.image}
                  alt={personalInfo.name}
                  className="relative w-full h-auto rounded-2xl shadow-2xl object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <div className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {personalInfo.bio}
                </p>
              </div>

              {/* Info Cards */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-gray-900 transition-colors">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">19</h3>
                  <p className="text-sm text-gray-600">Yaş</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-gray-900 transition-colors">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">3</h3>
                  <p className="text-sm text-gray-600">İlgi Alanı</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-gray-900 transition-colors">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">∞</h3>
                  <p className="text-sm text-gray-600">Öğrenme Azmi</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-gray-900 transition-colors">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">100%</h3>
                  <p className="text-sm text-gray-600">Motivasyon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

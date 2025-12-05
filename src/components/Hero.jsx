import React from 'react';
import { Button } from './ui/button';
import { Github, Linkedin, Twitter, Mail, Download, ArrowDown } from 'lucide-react';
import { personalInfo, socialLinks } from '../mock';

const Hero = () => {
  const iconMap = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
    mail: Mail
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white pt-20">
      <div className="container mx-auto px-4 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              {personalInfo.name}
            </h1>
            <h2 className="text-2xl lg:text-3xl font-semibold text-gray-600 mb-6">
              {personalInfo.title}
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {personalInfo.tagline}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center space-x-4 mb-10">
            {socialLinks.map((social) => {
              const Icon = iconMap[social.icon];
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 hover:bg-gray-900 text-gray-900 hover:text-white rounded-lg transition-all duration-300 transform hover:scale-110"
                  aria-label={social.name}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              size="lg"
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 text-base font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
              onClick={() => scrollToSection('projects')}
            >
              Projeleri Gör
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-6 text-base font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open(personalInfo.resumeUrl, '_blank')}
            >
              <Download size={20} className="mr-2" />
              CV İndir
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center animate-bounce">
            <button
              onClick={() => scrollToSection('about')}
              className="p-2 text-gray-400 hover:text-gray-900 transition-colors"
              aria-label="Scroll down"
            >
              <ArrowDown size={28} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

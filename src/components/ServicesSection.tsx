import React from 'react';
import { GlobeIcon, SmartphoneIcon, DatabaseIcon, CloudIcon, ShieldIcon, BrainIcon } from 'lucide-react';
export const ServicesSection = () => {
  const services = [{
    icon: <GlobeIcon size={40} className="text-[#FCDC00]" />,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern frameworks and technologies.'
  }, {
    icon: <SmartphoneIcon size={40} className="text-[#FCDC00]" />,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android devices.'
  }, {
    icon: <DatabaseIcon size={40} className="text-[#FCDC00]" />,
    title: 'Database Solutions',
    description: 'Efficient database design, optimization, and management for your applications.'
  }, {
    icon: <CloudIcon size={40} className="text-[#FCDC00]" />,
    title: 'Cloud Services',
    description: 'Scalable cloud infrastructure and deployment solutions for your business.'
  }, {
    icon: <ShieldIcon size={40} className="text-[#FCDC00]" />,
    title: 'Security Consulting',
    description: 'Comprehensive security audits and implementation of best practices.'
  }, {
    icon: <BrainIcon size={40} className="text-[#FCDC00]" />,
    title: 'AI Integration',
    description: 'Intelligent solutions leveraging machine learning and artificial intelligence.'
  }];
  return <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A304F] mb-4">
            Our <span className="text-[#FCDC00]">Services</span>
          </h2>
          <div className="w-20 h-1 bg-[#FCDC00] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-700">
            We offer a comprehensive range of software development services to
            help businesses transform their digital presence and operations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-[#FCDC00]">
              <div className="bg-[#1A304F] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1A304F] mb-3">
                {service.title}
              </h3>
              <p className="text-gray-700">{service.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};